import { Model } from "positron-core/dataflow";
import { InvariableArray } from "positron-core/invariable";

export class SelectionModel extends Model {
    get lead() {
        const { selection } = this;

        return selection.length ? selection[selection.length - 1] : null;
    }

    init(...props) {
        super.init({ multiple: false, anchor: null, items: [], selected: [] }, ...props);
    }

    indexOf(item) {
        const { items } = this;

        return this.items.indexOf(item);
    }

    contains(item) {
        return this.indexOf(item) !== -1;
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

    toggle(item) {

    }

    add(item) {

    }

    selectTo(item) {

    }

    valueOf() {
        return Object.assign(super.valueOf(), this.getValues("selected"));
    }
}

SelectionModel.connect({
    items: InvariableArray,
    selected: InvariableArray
});
