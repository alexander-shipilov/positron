import { BoundedRect } from "./BoundedRect";
import { Rect } from "./Rect";

describe("BoundedRect", () => {
    describe("#align", () => {
        const bounds = BoundedRect.from({ left: 100, right: 100, top: 100, bottom: 100, width: 100, height: 100 });
        const rect = Rect.from({ width: 50, height: 50 });

        it("return bounds to align passed rect relative current object", () => {
            expect(bounds.align(rect, { left: "left" }).valueOf()).toEqual({ left: 100 });
            expect(bounds.align(rect, { left: "right" }).valueOf()).toEqual({ left: 200 });
            expect(bounds.align(rect, { left: "center" }).valueOf()).toEqual({ left: 150 });

            expect(bounds.align(rect, { top: "top" }).valueOf()).toEqual({ top: 100 });
            expect(bounds.align(rect, { top: "bottom" }).valueOf()).toEqual({ top: 200 });
            expect(bounds.align(rect, { top: "center" }).valueOf()).toEqual({ top: 150 });

            expect(bounds.align(rect, { right: "left" }).valueOf()).toEqual({ right: 200 });
            expect(bounds.align(rect, { right: "right" }).valueOf()).toEqual({ right: 100 });
            expect(bounds.align(rect, { right: "center" }).valueOf()).toEqual({ right: 150 });

            expect(bounds.align(rect, { bottom: "top" }).valueOf()).toEqual({ bottom: 200 });
            expect(bounds.align(rect, { bottom: "bottom" }).valueOf()).toEqual({ bottom: 100 });
            expect(bounds.align(rect, { bottom: "center" }).valueOf()).toEqual({ bottom: 150 });

            expect(bounds.align(rect, { center: "left" }).valueOf()).toEqual({ left: 75 });
            expect(bounds.align(rect, { center: "right" }).valueOf()).toEqual({ right: 75 });
            expect(bounds.align(rect, { center: "top" }).valueOf()).toEqual({ top: 75 });
            expect(bounds.align(rect, { center: "bottom" }).valueOf()).toEqual({ bottom: 75 });
            expect(bounds.align(rect, { center: "horizontal" }).valueOf()).toEqual({ left: 125, right: 125 });
            expect(bounds.align(rect, { center: "vertical" }).valueOf()).toEqual({ top: 125, bottom: 125 });

            expect(bounds.align(rect, { center: "center" }).valueOf())
                .toEqual({ left: 125, top: 125, right: 125, bottom: 125 });
        });
    });

    describe("#toStyle", () => {
        expect(BoundedRect.from({ left: 10, right: 10, top: 10, bottom: 10, width: 10, height: 10 }).toStyle())
            .toEqual({ left: "10px", right: "10px", top: "10px", bottom: "10px", width: "10px", height: "10px" });
    });
});
