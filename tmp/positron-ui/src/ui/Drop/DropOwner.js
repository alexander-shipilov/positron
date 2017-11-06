import { InvariableObject, TypedInvariableObject } from "positron-core/src/invariable";
import { forEach } from "positron-core/src/object";
import { Drop } from "./Drop";

export class DropModel extends TypedInvariableObject.of(InvariableObject) {
}


export class DropOwner {
    componentDidMount() {
        this.updateDrops(this.state.drops);
    }

    componentDidUpdate(prevProps, { drops: prevDrops }) {
        const { drops: currDrops } = this.state;

        if (currDrops !== prevDrops) {
            this.updateDrops(currDrops);
        }
    }

    componentWillUnmount() {
        forEach(this.state.drops, this.unmountDrop, this);
    }

    dropDidMount() {
    }

    dropWillUnmount() {
    }

    hideAllDrops() {
        this.setState({ drops: {} });
    }

    hideDrop(id) {
        const { drops } = this.state;

        this.setState({ drops: drops.assign({ [id]: null }) });
    }

    initDrop() {
        this.initState({ drops: new DropModel() });
    }

    isVisibleDrop(state, id) {
        return state.drops[id];
    }

    mountDrop(id, { render, props }) {
        Drop.mount(id, Object.assign({}, props, { render, owner: this }));
    }

    showDrop(id, render, props) {
        const { drops } = this.state;

        this.setState({ drops: drops.assign({ [id]: { render, props } }) });
    }

    unmountDrop(id) {
        Drop.unmount(id);
    }

    updateDrops(drops) {
        forEach(drops.valueOf(), (drop, id) => {
            if (drop) {
                this.mountDrop(id, drop);
            } else {
                this.unmountDrop(id);
            }
        });
    }
}
