import { implement } from "../implement";

describe("implement", () => {
  it("creates aggregation of class with specified mixins", () => {
    class Foo {
      foo() {
      }
    }

    class Bar {
      bar() {
      }
    }

    class Ted {
      static ted() {
      }

      ted() {
      }
    }

    const Implementation = implement(Foo, Bar, Ted);

    expect(Implementation.prototype).toHaveProperty("bar");
    expect(Implementation.prototype).toHaveProperty("ted");
    expect(Implementation).toHaveProperty("ted");
  });


  it("aggregation should have own mixin's enumerated properties only", () => {
    class Foo {
    }

    class Bar {
      bar() {
      }
    }

    class Ted extends Bar {
      ted() {
      }
    }

    expect(implement(Foo, Ted).prototype).not.toHaveProperty("bar");
  });

  it("should throw if the passed value is not a function", () => {
    expect(() => implement()).toThrow();
    expect(() => implement({})).toThrow();
  });

  it("should create a new class", () => {
    class Foo {
      foo() {
      }
    }

    expect(implement(Foo, class {
      bar() {
      }
    })).not.toBe(Foo);
  });

  it("should not modify the given class", () => {
    class Foo {
    }

    implement(Foo, class {
      bar() {
      }
    });

    expect(Foo.prototype).not.toHaveProperty("bar");
  });

  it("aggregation should have the same name as specified class", () => {
    class Foo {
    }

    class Bar {
    }

    expect(implement(Foo, Bar).name).toEqual(Foo.name);
  });

  it("aggregation should have property `mixins` which contains array of implemented objects", () => {
    class Foo {
    }

    class Bar {
    }

    class Ted {
    }

    expect(implement(Foo, Bar, Ted).mixins).toEqual([Bar, Ted]);
  });
});
