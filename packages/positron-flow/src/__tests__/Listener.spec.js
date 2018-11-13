import { Base } from "positron-core";
import { Listener } from "../Listener";
import { Publisher } from "../Publisher";

describe("Listener", () => {
  let publisher;
  let handler;

  beforeEach(() => {
    publisher = new Publisher();
    handler = jest.fn().mockReturnValue(3);
  });

  it("should extends Base", () => {
    expect(Listener.isImplementationOf(Base)).toBeTruthy();
  });

  describe("#constructor", () => {
    it("creates a new Listener of passed Publisher", () => {
      const listener = new Listener(publisher, handler);

      expect(listener).toBeInstanceOf(Listener);
      expect(listener.publisher).toBe(publisher);
      expect(listener.handler).toBe(handler);
    });

    it("should throw an error if passed publisher is not instance of Publisher", () => {
      expect(() => new Listener(null)).toThrow("Publisher expected");
    });

    it("should throw an error if passed handler is not a function", () => {
      expect(() => new Listener(publisher, null)).toThrow("function expected");
    });

    it("should add a handler to the passed publisher", () => {
      new Listener(publisher, handler);

      expect.assertions(1);

      return publisher.trigger(1, 2).then(() => {
        expect(handler).toHaveBeenCalledWith(1, 2);
      });
    });
  });

  describe("#disable", () => {
    it("disables listener", () => {
      const listener = new Listener(publisher, handler);

      listener.disable();

      expect.assertions(1);

      return publisher.trigger(1, 2).then(() => {
        expect(handler).not.toHaveBeenCalled();
      });
    });
  });

  describe("#enable", () => {
    it("enables listener", () => {
      const listener = new Listener(publisher, handler);

      listener.disable();
      listener.enable();

      expect.assertions(1);

      return publisher.trigger(1, 2).then(() => {
        expect(handler).toHaveBeenCalledWith(1, 2);
      });
    });
  });

  describe("#then", () => {
    it("adds resolve / reject handlers", () => {
      const listener = new Listener(publisher, handler);
      const onResolve = jest.fn();

      listener.then(onResolve);

      expect.assertions(2);

      return publisher.trigger(1, 2).then(() => {
        expect(handler).toHaveBeenCalledWith(1, 2);
        expect(onResolve).toHaveBeenCalledWith(3);
      });
    });

    it("should return current instance", () => {
      const listener = new Listener(publisher, handler);

      expect(listener.then(() => void 0)).toBe(listener);
    });
  });

  describe("#catch", () => {
    it("should return current instance", () => {
      const listener = new Listener(publisher, () => Promise.reject("error"));
      const onReject = jest.fn();

      listener.catch(onReject);

      expect.assertions(1);

      return publisher.trigger(1, 2).then(() => {
        expect(onReject).toHaveBeenCalledWith("error");
      });
    });


    it("should return current instance", () => {
      const listener = new Listener(publisher, handler);

      expect(listener.catch(() => void 0)).toBe(listener);
    });
  });
});
