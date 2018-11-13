import { mockElement, mockParent } from "./__mocks__";
import { Bounds } from "../Bounds";
import { Point } from "../Point";
import { Rect } from "../Rect";

const { POSITIVE_INFINITY, NEGATIVE_INFINITY } = Number;

const sides = ["left", "right", "top", "bottom"];
const invalid = ["a", NEGATIVE_INFINITY, POSITIVE_INFINITY];

function toThrowForInvalid(handler) {
  sides.forEach((side) => {
    invalid.forEach((value) => {
      expect(() => handler(side, value)).toThrow();
    });
  });
}

describe("Bounds", () => {
  const bounds = new Bounds({ left: 10, top: 10, right: 10, bottom: 10 });
  const rect = new Rect({ left: 0, top: 0, width: 100, height: 100 });

  it("implements Point", () => {
    expect(Point.isImplementedBy(Bounds)).toBeTruthy();
  });

  describe(".fromElement", () => {
    it("creates new bounds of the passed element relative to the second one", () => {
      const elementRect = mockElement.getBoundingClientRect();
      const parentRect = mockParent.getBoundingClientRect();

      expect(Bounds.fromElement(mockElement, mockParent).valueOf()).toEqual({
        left: elementRect.left - parentRect.left,
        top: elementRect.top - parentRect.top,
        right: parentRect.right - elementRect.right,
        bottom: parentRect.bottom - elementRect.bottom
      });
    });

    it("should return bounds relative to the body if the second param is omitted", () => {
      const elementRect = mockElement.getBoundingClientRect();

      expect(Bounds.fromElement(mockElement).valueOf()).toEqual({
        left: elementRect.left,
        top: elementRect.top,
        right: -elementRect.right,
        bottom: -elementRect.bottom
      });
    });

    it("should throw if there is no body", () => {

    });
  });

  describe(".fromRect", () => {
    it("creates a new bounds of the given rect related to the another one", () => {
      const rect = new Rect({ left: 10, top: 10, width: 10, height: 10 });
      const fromRect = new Rect({ left: 5, top: 5, width: 20, height: 20 });

      expect(Bounds.fromRect(rect, fromRect)).toBeInstanceOf(Bounds);
      expect(Bounds.fromRect(rect, fromRect).valueOf()).toEqual({ left: 5, top: 5, right: 5, bottom: 5 });
    });
  });

  describe("#constructor", () => {
    it("creates new bounds", () => {
      expect(new Bounds().valueOf()).toEqual({});
      expect(new Bounds({ right: null }).valueOf()).toEqual({});
      expect(new Bounds({ right: void 0 }).valueOf()).toEqual({});
      expect(new Bounds({ bottom: null }).valueOf()).toEqual({});
      expect(new Bounds({ bottom: void 0 }).valueOf()).toEqual({});

      expect(new Bounds({ right: 1 }).valueOf()).toEqual({ right: 1 });
      expect(new Bounds({ bottom: 1 }).valueOf()).toEqual({ bottom: 1 });

      expect(new Bounds({ left: 1, top: 2, right: 3, bottom: 4 }).valueOf())
          .toEqual({ left: 1, top: 2, right: 3, bottom: 4 });
    });

    it("should throw an error if one or both coordinates is Infinity or is not a number", () => {
      toThrowForInvalid((side, value) => new Bounds({ [side]: value }));
    });
  });

  describe("#constrain", () => {
    const nextBounds = bounds.valueOf();

    expect(bounds.constrain({ left: 5 }).valueOf()).toEqual(nextBounds);
    expect(bounds.constrain({ top: 5 }).valueOf()).toEqual(nextBounds);
    expect(bounds.constrain({ right: 5 }).valueOf()).toEqual(nextBounds);
    expect(bounds.constrain({ bottom: 5 }).valueOf()).toEqual(nextBounds);
  });

  describe("#contourIn", () => {
    it("creates new contoured Rect", () => {
      expect(new Bounds({ top: 10, right: 10 }).contourIn(rect).valueOf())
          .toEqual({ left: 0, top: 10, width: 90, height: 90 });
      expect(new Bounds({ left: 10, top: 10, right: 10, bottom: 10 }).contourIn(rect).valueOf())
          .toEqual({ left: 10, top: 10, width: 80, height: 80 });
    });
  });

  describe("#contourOut", () => {
    it("creates new contoured Rect", () => {
      expect(new Bounds({ top: 10, right: 10 }).contourOut(rect).valueOf())
          .toEqual({ left: 0, top: -10, width: 110, height: 110 });
      expect(new Bounds({ left: 10, top: 10, right: 10, bottom: 10 }).contourOut(rect).valueOf())
          .toEqual({ left: -10, top: -10, width: 120, height: 120 });
    });
  });

  describe("#invert", () => {
    it("creates a new Bounds with inverse sides", () => {
      expect(bounds.invert().valueOf()).toEqual({ left: -10, top: -10, right: -10, bottom: -10 });
    });

    it("should return current bounds all sides are 0 or null", () => {
      const bounds = new Bounds({ left: 0, top: 0 });

      expect(bounds.invert()).toBe(bounds);
    });
  });

  describe("#resizeIn", () => {
    it("creates a new Bounds by subtracting passed bounds from the current one", () => {
      const nextBounds = { left: 15, top: 15, right: 15, bottom: 15 };

      expect(bounds.resizeIn({ left: 5 }).valueOf()).toEqual({ left: 15, top: 10, right: 10, bottom: 10 });
      expect(bounds.resizeIn({ top: 5 }).valueOf()).toEqual({ left: 10, top: 15, right: 10, bottom: 10 });
      expect(bounds.resizeIn({ right: 5 }).valueOf()).toEqual({ left: 10, top: 10, right: 15, bottom: 10 });
      expect(bounds.resizeIn({ bottom: 5 }).valueOf()).toEqual({ left: 10, top: 10, right: 10, bottom: 15 });

      expect(bounds.resizeIn({ left: 5, top: 5, right: 5, bottom: 5 }).valueOf()).toEqual(nextBounds);
      expect(bounds.resizeIn({ left: 5, top: 5 }, { right: 5, bottom: 5 }).valueOf()).toEqual(nextBounds);
      expect(bounds.resizeIn({ left: 5, top: 5 }).resizeIn({ right: 5, bottom: 5 }).valueOf())
          .toEqual(nextBounds);
    });

    it("should return current bounds if all sides have not been changed", () => {
      expect(bounds.resizeIn()).toBe(bounds);
      expect(bounds.resizeIn(null)).toBe(bounds);
      expect(bounds.resizeIn({ left: 0, top: 0, right: 0, bottom: 0 })).toBe(bounds);
      expect(bounds.resizeIn({ left: 0, top: 0 }, { right: 0, bottom: 0 })).toBe(bounds);
      expect(bounds.resizeIn({ left: 5, top: 5 }).resizeIn({ left: -5, top: -5 })).toBe(bounds);
    });

    it("should throw an error if some of bounds is Infinity or is not a number", () => {
      toThrowForInvalid((side, value) => bounds.resizeIn({ [side]: value }));
    });
  });

  describe("#resizeTo", () => {
    it("creates a new Bounds with one or both specified bounds", () => {
      const nextBounds = { left: 5, top: 5, right: 5, bottom: 5 };

      expect(bounds.resizeTo({ left: 5 }).valueOf()).toEqual({ left: 5, top: 10, right: 10, bottom: 10 });
      expect(bounds.resizeTo({ top: 5 }).valueOf()).toEqual({ left: 10, top: 5, right: 10, bottom: 10 });
      expect(bounds.resizeTo({ right: 5 }).valueOf()).toEqual({ left: 10, top: 10, right: 5, bottom: 10 });
      expect(bounds.resizeTo({ bottom: 5 }).valueOf()).toEqual({ left: 10, top: 10, right: 10, bottom: 5 });

      expect(bounds.resizeTo({ left: 5, top: 5, right: 5, bottom: 5 }).valueOf()).toEqual(nextBounds);
      expect(bounds.resizeTo({ left: 5, top: 5 }, { right: 5, bottom: 5 }).valueOf()).toEqual(nextBounds);
      expect(bounds.resizeTo({ left: 5, top: 5 }).resizeTo({ right: 5, bottom: 5 }).valueOf())
          .toEqual(nextBounds);
    });

    it("should return current bounds if all bounds were not changed", () => {
      expect(bounds.resizeTo()).toBe(bounds);
      expect(bounds.resizeTo(null)).toBe(bounds);
      expect(bounds.resizeTo(bounds)).toBe(bounds);

      expect(bounds.resizeTo({ left: 10, top: 10, right: 10, bottom: 10 })).toBe(bounds);
      expect(bounds.resizeTo({ left: 10, top: 10 }, { right: 10, bottom: 10 })).toBe(bounds);
      expect(bounds.resizeTo({ left: 10, top: 10 }).resizeTo({ right: 10, bottom: 10 })).toBe(bounds);
    });

    it("should throw an error if some of bounds is Infinity or is not a number", () => {
      toThrowForInvalid((side, value) => bounds.resizeTo({ [side]: value }));
    });
  });

  describe("#resizeOut", () => {
    it("creates a new Bounds by adding passed bounds to the current one", () => {
      const nextBounds = { left: 5, top: 5, right: 5, bottom: 5 };

      expect(bounds.resizeOut({ left: 5 }).valueOf()).toEqual({ left: 5, top: 10, right: 10, bottom: 10 });
      expect(bounds.resizeOut({ top: 5 }).valueOf()).toEqual({ left: 10, top: 5, right: 10, bottom: 10 });
      expect(bounds.resizeOut({ right: 5 }).valueOf()).toEqual({ left: 10, top: 10, right: 5, bottom: 10 });
      expect(bounds.resizeOut({ bottom: 5 }).valueOf()).toEqual({ left: 10, top: 10, right: 10, bottom: 5 });

      expect(bounds.resizeOut({ left: 5, top: 5, right: 5, bottom: 5 }).valueOf()).toEqual(nextBounds);
      expect(bounds.resizeOut({ left: 5, top: 5 }, { right: 5, bottom: 5 }).valueOf()).toEqual(nextBounds);
      expect(bounds.resizeOut({ left: 5, top: 5 }).resizeOut({ right: 5, bottom: 5 }).valueOf())
          .toEqual(nextBounds);
    });

    it("should return current bounds if all side has not been not changed", () => {
      expect(bounds.resizeOut()).toBe(bounds);
      expect(bounds.resizeOut(null)).toBe(bounds);
      expect(bounds.resizeOut({ left: 0, top: 0, right: 0, bottom: 0 })).toBe(bounds);
      expect(bounds.resizeOut({ left: 0, top: 0 }, { right: 0, bottom: 0 })).toBe(bounds);
      expect(bounds.resizeOut({ left: 10, top: 10 }).resizeOut({ left: -10, top: -10 })).toBe(bounds);
    });

    it("should throw an error if some of bounds is Infinity or is not a number", () => {
      toThrowForInvalid((side, value) => bounds.resizeOut({ [side]: value }));
    });
  });

  describe("#toStyle", () => {
    it("creates an object which can be used to assign HTML element styles", () => {
      const auto = { left: "auto", top: "auto", right: "auto", bottom: "auto" };

      expect(new Bounds().toStyle()).toEqual(auto);
      expect(new Bounds({ left: 0 }).toStyle(Object.assign({}, auto, { left: "0px" })));
      expect(new Bounds({ top: 0 }).toStyle(Object.assign({}, auto, { top: "0px" })));
      expect(new Bounds({ right: 0 }).toStyle(Object.assign({}, auto, { right: "0px" })));
      expect(new Bounds({ bottom: 0 }).toStyle(Object.assign({}, auto, { bottom: "0px" })));
    });
  });
});

