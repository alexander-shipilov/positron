import { Component } from "/ui/Component";
import { DropOwner } from "/ui/Drop";

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

    init(...args) {
        super.init(...args);

        this.initDrop();
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

    hideDrop() {
        super.hideDrop(DROP_ID);
    }

    isVisibleDrop(state) {
        return super.isVisibleDrop(state, DROP_ID);
    }
}

AccentSelector.initPropTypes(AccentSelectorPropTypes).initDefaultProps({
    renderer: AccentSelectorRenderer
});
