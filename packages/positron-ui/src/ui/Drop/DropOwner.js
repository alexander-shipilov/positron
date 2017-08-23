import { InvariableObject, TypedInvariableObject } from "positron-core/invariable";
import { forEach } from "positron-core/object";
import { Drop } from "./Drop";

export class DropModel extends TypedInvariableObject.of(InvariableObject) {
}


export class DropOwner {
    initDrop() {
        this.initState({ drops: new DropModel() });
    }

    dropDidMount() {
    }

    dropWillUnmount() {
    }

    mountDrop(id, { render, props }) {
        Drop.mount(id, Object.assign({}, props, { render, owner: this }));
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

    showDrop(id, render, props) {
        const { drops } = this.state;

        this.setState({ drops: drops.assign({ [id]: { render, props } }) });
    }

    hideDrop(id) {
        const { drops } = this.state;

        this.setState({ drops: drops.assign({ [id]: null }) });
    }

    hideAllDrops() {
        this.setState({ drops: {} });
    }

    isVisibleDrop(state, id) {
        return state.drops[id];
    }
}
