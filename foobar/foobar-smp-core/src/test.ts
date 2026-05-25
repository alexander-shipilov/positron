import { BitmapFormat } from "@positron/foobar-smp";
import {
  console,
  FbProfiler,
  gdi,
  global,
  window,
} from "@positron/foobar-smp/global";

import { debug } from "./debug";
import { Emitter } from "./emitter";
import { FbCallbackManager } from "./fb-callback";

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

FbCallbackManager.instance.on(
  "mouse_lbtn_down",
  (x: number, y: number, flags: number) => {
    console.log(x, y, flags);
  },
);

export function toColor(color: number): [number, number, number] {
  return [(color >> 16) & 0xff, (color >> 8) & 0xff, color & 0xff];
}

console.log(debug(global, 4));

console.log(debug(global.FbProfiler, 4));
console.log(debug(FbProfiler, 4));

const dir =
  "D:\\workspace\\positron\\foobar\\foobar-smp-core\\src\\assets\\img";

await gdi.LoadImageAsyncV2(window.ID, `${dir}\\test.bmp`).then((img) => {
  if (img) {
    const px = gdi.CreateImage(1, 1);
    const gr = px.GetGraphics();

    gr.GdiDrawBitmap(img.CreateRawBitmap(), 0, 0, 1, 1, 200, 200, 1, 1);
    px.ReleaseGraphics(gr);

    console.log(px.GetColourScheme(10));
    console.log(JSON.parse(px.GetColourSchemeJSON(10)));

    console.log(debug(px.GetColourScheme(1)[0].toString(16), 4));
    console.log(
      debug(
        (
          JSON.parse(px.GetColourSchemeJSON(1)) as { col: number }[]
        )[0].col.toString(16),
        4,
      ),
    );

    px.SaveAs(`${dir}\\px.bmp`, BitmapFormat.Bmp);
  }
});
