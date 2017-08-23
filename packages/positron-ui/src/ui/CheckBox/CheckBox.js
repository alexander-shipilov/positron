import { Component } from "/Component";
import { FormElement } from "/ui/FormElement";

import "./CheckBox.scss";
import { CheckBoxPropTypes } from "./CheckBoxPropTypes";
import { CheckBoxRenderer } from "./CheckBoxRenderer";

export class CheckBox extends Component.implement(FormElement) {
}

CheckBox.initPropTypes(CheckBoxPropTypes).initDefaultProps({
    renderer: CheckBoxRenderer
});
