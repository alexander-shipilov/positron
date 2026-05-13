import { console } from "@positron/foobar-smp";

import { debug } from "./debug";
import { Emitter } from "./emitter";
import { FbCallbackManager } from "./fb-event";

const emitter = new Emitter();

function callbackA(): undefined {
  console.log("A");
  emitter.off("event", callbackB);
}

const callbackB = (): undefined => {
  console.log("B");
};

emitter.on("event", callbackA);
emitter.on("event", callbackB);

// `callbackA` removes listener `callbackB` but it will still be called.
// Internal listener array at time of emit [`callbackA`, `callbackB`]

emitter.emit("event");
// >> A
// >> B

// `callbackB` is now removed.
// Internal listener array [`callbackA`]

emitter.emit("event");
// >> A

console.log(debug(emitter.listeners("event"), 4));
console.log(debug(Object.getOwnPropertyNames(globalThis), 4));

FbCallbackManager.instance.on(
  "mouse_lbtn_down",
  (x: number, y: number, flags: number) => {
    console.log(x, y, flags);
  },
);
