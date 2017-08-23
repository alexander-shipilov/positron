import { Component } from "/Component";
import { TextElement } from "/ui/TextElement";
import { FormElement } from "/ui/FormElement";

import "./TextField.scss";
import { TextFieldPropTypes } from "./TextFieldPropTypes";
import { TextFieldRenderer } from "./TextFieldRenderer";

export class TextField extends Component.implement(FormElement, TextElement) {
    init(...args) {
        super.init(...args);

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
