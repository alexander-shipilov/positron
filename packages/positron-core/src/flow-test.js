// @flow

class Ted {
}

class Foo {
}

class Bar {
}

export type Types = { [string]: Class<Object> };

export interface Typed<T: Class<Object>, U: Object> {
    of<V: U>(props: V): Typed<T, V> & V;
}

function of<T: Class<Object>, U: Object>(Cls: T, types: U): T {
    class TypedCls extends Cls {
        static of<V: U>(nextTypes: V): T & Typed<T, V> & V {
            return of(this, nextTypes);
        }
    }

    return Object.assign(TypedCls, types);
}


const TypedTed = of(Ted, { foo: Foo, bar: Bar });

TypedTed.foo === 1;
TypedTed.bar === 1;
TypedTed.of({
    foo: Foo, bar: class extends Bar {
    }
});


// const g = new G();
