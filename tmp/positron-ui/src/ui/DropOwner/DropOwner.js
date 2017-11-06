import { Component } from "../Component";

import { DropOwnerPropTypes } from "./DropOwnerPropTypes";
import { DropOwnerRenderer } from "./DropOwnerRenderer";

export class DropOwner extends Component {
    componentDidMount() {
        this.updateDrops(this.state.drops);
    }

    componentDidUpdate({ drop: prevDrop }) {
        const { drop } = this.props;

        if (drop !== prevDrop) {
            this.updateDrop();
        }
    }

    componentWillUnmount() {
        const { drop } = this.props;

        if (drop) {
            this.unmount(drop);
        }
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

    updateDrop(drops) {
        forEach(drops.valueOf(), (drop, id) => {
            if (drop) {
                this.mountDrop(id, drop);
            } else {
                this.unmountDrop(id);
            }
        });
    }
}

DropOwner.initPropTypes(DropOwnerPropTypes).initDefaultProps({
    renderer: DropOwnerRenderer
});
