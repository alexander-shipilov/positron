import { Component } from "/Component";
import { FormElement } from "../FormElement";
import { TextElement } from "../TextElement";

import "./TextField.scss";
import { TextFieldPropTypes } from "./TextFieldPropTypes";
import { TextFieldRenderer } from "./TextFieldRenderer";

export class TextField extends Component.implement(FormElement, TextElement) {
    constructor(...args) {
        super(...args);

        this.initFormElement();
        this.initTextElement();
    }
}

TextField.initPropTypes(TextFieldPropTypes).initDefaultProps({
    renderer: TextFieldRenderer,
    type: "text",
    value: "",
    readOnly: false,
    disabled: false,
    autoComplete: "off"
});
