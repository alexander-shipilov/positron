import { InvariableArray, InvariableObject } from "positron-core/src/invariable";

export class SelectionModel extends InvariableObject {
    get lead() {
        const { selection } = this;

        return selection.length ? selection[selection.length - 1] : null;
    }

    constructor(...props) {
        super({ multiple: false, anchor: null, items: [], selected: [] }, ...props);
    }

    add(item) {

    }

    contains(item) {
        return this.indexOf(item) !== -1;
    }

    indexOf(item) {
        const { items } = this;

        return items.indexOf(item);
    }

    isSelected(item) {
        const { selected } = this;

        return selected.indexOf(item) !== -1;
    }

    select(item) {
        const { selected } = this;

        return this.indexOf(item) === -1 ? this : this.assign(
            { selected: selected.assign({ length: 1, 0: item }), anchor: item });
    }

    selectTo(item) {

    }

    toggle(item) {

    }

    valueOf() {
        return Object.assign(super.valueOf(), this.getValues("selected"));
    }
}

SelectionModel.connect({
    items: InvariableArray,
    selected: InvariableArray
});
