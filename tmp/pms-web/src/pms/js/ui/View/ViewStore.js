import { filter, map } from "positron-core";
import { listen } from "positron-flow";
import { ImmutableStore } from "positron-immutable";
import { ViewModel } from "ui/View/ViewModel";

export class ViewStore extends ImmutableStore.of(ViewModel) {
    static of(Type) {
        return super.of({ Type });
    }

    setItem(nextItem) {
        const { item } = this.state;

        return this.setState({ item: item && nextItem ? item.assign(nextItem) : nextItem });
    }

    listenActions(actions) {
        actions = filter(actions, (action, name) => typeof this[name] === "function");

        return map(actions, (action, name) => listen(action, this[name].bind(this)));
    }
}
