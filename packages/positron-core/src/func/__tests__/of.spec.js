import { isImplementationOf } from "../isImplementationOf";
import { of, Typed } from "../of";

describe("of", () => {
  let Foo;
  let Bar;
  let TypedFoo;

  beforeEach(() => {
    Foo = class {
    };

    Bar = class {
    };

    TypedFoo = of(Foo, { bar: Bar });
  });

  it("creates a class which implements the passed class and `Typed` mixin", () => {
    expect(TypedFoo).not.toBe(Foo);
    expect(isImplementationOf(TypedFoo, Foo, Typed)).toBeTruthy();
    expect(isImplementationOf(of(TypedFoo, { ted: Bar }), Foo, TypedFoo, Typed));
  });

  it("should add property `Symbol(Typed.types)`", () => {
    expect(TypedFoo[Typed.SYMBOL_TYPES]).toEqual({ bar: Bar });
  });

  it("should accept `Symbol(Typed.all)`", () => {
    class Ted extends Bar {
    }

    const TypedFoo = of(Foo, { [Typed.SYMBOL_ALL]: Bar });
    const TypedFoo2 = of(TypedFoo, { [Typed.SYMBOL_ALL]: Ted });

    expect(() => of(TypedFoo, { [Typed.SYMBOL_ALL]: Foo })).toThrow("Expected type `Symbol(Typed.all)` to be Bar");
    expect(() => of(TypedFoo, { ted: Foo })).toThrow("Expected type `ted` to be Bar");
    expect(() => of(TypedFoo, { ted: Bar, zoo: Foo })).toThrow("Expected type `zoo` to be Bar");

    expect(() => of(TypedFoo2, { [Typed.SYMBOL_ALL]: Foo })).toThrow("Expected type `Symbol(Typed.all)` to be Ted");
  });

  it("should throw if the passed target is not a function", () => {
    expect(() => of({})).toThrow();
  });
});

describe("Typed", () => {
  let Foo;
  let Bar;
  let Ted;
  let TypedFoo;

  beforeEach(() => {
    Foo = class Foo {
    };

    Bar = class Bar {
    };

    Ted = class Ted extends Bar {
    };

    TypedFoo = of(Foo, { bar: Bar });
  });

  describe(".of", () => {
    it("updates types", () => {
      const NextTypedFoo = TypedFoo.of({ bar: Ted });

      expect(NextTypedFoo).toBe(TypedFoo);
      expect(NextTypedFoo[Typed.SYMBOL_TYPES]).toEqual({ bar: Ted });
    });

    it("should throw if one or more redefined props mismatched to the corresponding type", () => {
      expect(() => TypedFoo.of({ bar: Foo })).toThrow("Expected type `bar` to be Bar");
      expect(() => TypedFoo.of({ ted: Ted })).not.toThrow();
    });
  });
});
