import { console } from "@positron/foobar-smp/global";

import { debug } from "./debug";

const circular = (value: object): object => Object.assign(value, { value });

console.log(circular({ a: 1 }));
console.log(debug(circular({ a: 1 })));

// eslint-disable-next-line no-sparse-arrays
console.log(circular([1, , 3]));
// eslint-disable-next-line no-sparse-arrays
console.log(debug(circular([1, , 3])));

console.log(circular(new Map([[1, 1]])));
console.log(debug(circular(new Map([[1, 1]]))));
console.log(debug(circular(new Set([1]))));
console.log(debug(circular(new WeakMap())));
console.log(debug(circular(new WeakSet())));

console.log(debug(Object.assign(circular([]), { v: circular({}) })));
console.log(debug(circular([circular({})])));

console.log(debug({ [Symbol.toStringTag]: "12.23/" }));
console.log(
  debug(
    new (class FF extends Date {
      public [Symbol.toStringTag] = "12.23/";
    })(),
  ),
);

console.log(
  debug(
    new (class Foo extends Array {
      public [Symbol.toStringTag] = "12.23/";
    })(),
  ),
);

console.log(
  debug(
    Object.create(null, {
      [Symbol.toStringTag]: { value: "1,2" },
    }),
  ),
);

console.log(debug(Object.assign("foo", { foo: 1 })));

console.log(debug(["foo"]));

console.log(Object.assign(Symbol("foo"), { foo: 1 }));
console.log(debug(Object.assign(Symbol("foo"), { foo: 1 })));

// console.log(debug(global, 4));
// console.log(debug({}, 4));
