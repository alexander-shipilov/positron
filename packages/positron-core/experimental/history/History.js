import { Publisher } from "../../src/dataflow/index";

export class History extends Publisher {
    go(n) {
    }

    forward() {
        this.go(1);
    }

    back() {
        this.go(-1);
    }

    push() {
    }

    replace() {
    }
}