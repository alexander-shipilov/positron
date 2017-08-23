import { Action } from "../../src/dataflow/index";
import { PropTypes } from "../../src/prop-types/index";

const { number, string, object } = PropTypes;

export class HistoryActions {
    constructor() {
        Object.assign(this, {
            go: new Action(number.isRequired),
            forward: new Action(),
            back: new Action(),
            push: new Action(string.isRequired, object)
        });
    }
}