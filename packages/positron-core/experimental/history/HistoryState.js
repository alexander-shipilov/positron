import { InvariableObject } from "../../src/invariable/index";

export class HistoryState extends InvariableObject {
    init(...props) {
        super.init({ action: null, state: null }, ...props);
    }

    valueOf() {
        return this.pick("action", "state");
    }
}