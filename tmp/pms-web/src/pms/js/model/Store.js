import { filter, map } from "positron-core";
import { listen } from "positron-flow";
import { ImmutableStore } from "positron-immutable";

export class Store extends ImmutableStore {
    listenActions(actions) {
        actions = filter(actions, (action, name) => typeof this[name] === "function");

        return map(actions, (action, name) => listen(action, this[name].bind(this)));
    }
}
