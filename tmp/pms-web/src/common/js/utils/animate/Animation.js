import { Base } from "positron-core";

export class Animation extends Base {
    _request = void 0;

    timestamp = void 0;

    onAnimationFrame = (timestamp) => {
        if (this.timestamp == null) {
            this.timestamp = timestamp;
        }

        let fraction = (timestamp - this.timestamp) / this.duration;

        if (fraction > 1) {
            fraction = 1;
        }

        this.handler(this.timing(fraction));

        if (this._request !== void 0 && fraction < 1) {
            requestAnimationFrame(this.onAnimationFrame);
        }
    };

    stop = () => {
        if (this._request) {
            cancelAnimationFrame(this._request);

            this._request = void 0;
        }
    };

    constructor(props) {
        super({ duration: 300, timing: Animation.linear(), handler: () => void 0 }, props);
    }

    requestAnimationFrame() {
        this._request = requestAnimationFrame(this.onAnimationFrame);
    }

    start() {
        if (!this._request) {
            this.requestAnimationFrame();
        }

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
