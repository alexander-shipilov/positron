import { Component } from "/Component";
import { FormElement } from "/ui/FormElement";

import "./Toggle.scss";
import { TogglePropTypes } from "./TogglePropTypes";
import { ToggleRenderer } from "./ToggleRenderer";

export class Toggle extends Component.implement(FormElement) {
    init(...args) {
        super.init(...args);

        this.initFormElement();
        this.onInputChange = this.onInputChange.bind(this);
        this.onLabelMouseDown = this.onLabelMouseDown.bind(this);
    }

    onInputChange(event) {
        const { target: { checked } } = event;

        this.onChange(checked);
    }

    onLabelMouseDown(event) {
        event.preventDefault();
    }
}

Toggle.initPropTypes(TogglePropTypes).initDefaultProps({
    renderer: ToggleRenderer
});
