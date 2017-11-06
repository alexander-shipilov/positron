import { Component } from "/Component";
import { FormElement } from "../FormElement";

import "./RadioGroup.scss";
import { RadioGroupPropTypes } from "./RadioGroupPropTypes";
import { RadioGroupRenderer } from "./RadioGroupRenderer";

export class RadioGroup extends Component.implement(FormElement) {
    onRadioChange = (checked, name) => {
        this.onChange(checked ? name : "");
    };

    constructor(...args) {
        super(...args);
        this.initFormElement();

        this.onRadioChange = this.onRadioChange.bind(this);
    }

    getOptionValue(option, index) {
        return this.props.renderer.getOptionValue(option, index);
    }

    isSelected(optionValue) {
        const { value } = this.props;

        return value === optionValue;
    }
}

RadioGroup.initPropTypes(RadioGroupPropTypes).initDefaultProps({
    renderer: RadioGroupRenderer
});
