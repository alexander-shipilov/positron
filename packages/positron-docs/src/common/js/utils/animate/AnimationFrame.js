import { Base } from "positron-core";

export class AnimationFrame extends Base {
    frame = null;

    constructor(handler) {
      super({ handler });
    }

    request() {
      if (this.frame == null) {
        this.frame = requestAnimationFrame(() => {
          this.frame = null;
          this.handler();
        });
      }
    }

    cancel() {
      const { frame } = this;

      if (frame) {
        this.frame = null;
        cancelAnimationFrame(frame);
      }
    }
}
