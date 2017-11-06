import { Component } from "positron-ui/src/ui/Component";
import { DropOwner } from "positron-ui/src/ui/Drop";

import "./AccentSelector.scss";
import { AccentSelectorPropTypes } from "./AccentSelectorPropTypes";
import { AccentSelectorRenderer } from "./AccentSelectorRenderer";

const DROP_ID = "accent-selector";

export class AccentSelector extends Component.implement(DropOwner) {
    onColorClick = (event) => {
        const { onSelect } = this.props;
        const accent = event.currentTarget.getAttribute("data-accent");

        this.hideDrop();
        if (onSelect) {
            onSelect(accent);
        }
    };

    onExpandClick = () => {
        this.isVisibleDrop(this.state) ? this.hideDrop() : this.showDrop(this.props);
    };

    hideDrop() {
        super.hideDrop(DROP_ID);
    }

    constructor(...args) {
        super(...args);

        this.initDrop();
    }

    isVisibleDrop(state) {
        return super.isVisibleDrop(state, DROP_ID);
    }

    showDrop(props) {
        const { selector } = this;
        const { renderer, accent, accents } = props;

        super.showDrop(DROP_ID, renderer.renderAccents, {
            to: selector,
            align: "rr tb",
            hideOnMouseDown: true,
            hideOnScroll: true,
            accent, accents
        });
    }
}

AccentSelector.initPropTypes(AccentSelectorPropTypes).initDefaultProps({
    renderer: AccentSelectorRenderer
});
