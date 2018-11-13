import { Base } from "positron-core";
import { AnimationFrame } from "./AnimationFrame";

export class Animation extends Base {
    timestamp = void 0;

    frame = new AnimationFrame(() => this.onAnimationFrame());

    onAnimationFrame(timestamp) {
      if (this.timestamp == null) {
        this.timestamp = timestamp;
      }

      let fraction = (timestamp - this.timestamp) / this.duration;

      if (fraction > 1) {
        fraction = 1;
      }

      this.handler(this.timing(fraction));

      if (fraction < 1) {
        this.frame.request();
      }
    };

    stop = () => {
      this.frame.cancel();
    };

    constructor(props) {
      super({ duration: 300, timing: Animation.linear(), handler: () => void 0 }, props);
    }

    start() {
      this.frame.request();

      return this.stop;
    }

    static animate(props) {
      return new this(props).start();
    }

    static linear() {
      return (progress) => progress;
    }

    static pow(pow) {
      return (progress) => Math.pow(progress, pow);
    }

    static circ() {
      return (progress) => 1 - Math.sin(Math.acos(progress));
    }
}
