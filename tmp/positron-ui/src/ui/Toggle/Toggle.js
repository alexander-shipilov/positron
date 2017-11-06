import { Component } from "/Component";
import { FormElement } from "../FormElement";

import "./Toggle.scss";
import { TogglePropTypes } from "./TogglePropTypes";
import { ToggleRenderer } from "./ToggleRenderer";

export class Toggle extends Component.implement(FormElement) {
    onInputChange = (event) => {
        const { target: { checked } } = event;

        this.onChange(checked);
    };

    onLabelMouseDown = (event) => {
        event.preventDefault();
    };

    constructor(...args) {
        super(...args);

        this.initFormElement();
    }
}

Toggle.initPropTypes(TogglePropTypes).initDefaultProps({
    renderer: ToggleRenderer
});
