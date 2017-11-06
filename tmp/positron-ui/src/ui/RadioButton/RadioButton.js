import { Component } from "/Component";
import { FormElement } from "../FormElement";

import "./RadioButton.scss";
import { RadioButtonPropTypes } from "./RadioButtonPropTypes";
import { RadioButtonRenderer } from "./RadioButtonRenderer";

export class RadioButton extends Component.implement(FormElement) {
}

RadioButton.initPropTypes(RadioButtonPropTypes).initDefaultProps({
    renderer: RadioButtonRenderer
});
