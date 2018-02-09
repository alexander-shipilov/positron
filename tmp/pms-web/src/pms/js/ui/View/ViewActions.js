import { Action } from "positron-flow";

export class ViewActions {
    constructor() {
        Object.assign(this, {
            setItem: new Action()
        });
    }
}
