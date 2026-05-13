import { console, global } from "@positron/foobar-smp";

import { debug } from "./debug";

const circular = (value: object): object => Object.assign(value, { value });

console.log(debug(circular({})));
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

console.log(debug(global, 4));
console.log(debug({}, 4));
