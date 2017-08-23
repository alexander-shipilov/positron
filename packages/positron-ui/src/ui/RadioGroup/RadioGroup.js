import { Component } from "/Component";
import { FormElement } from "/ui/FormElement";

import "./RadioGroup.scss";
import { RadioGroupPropTypes } from "./RadioGroupPropTypes";
import { RadioGroupRenderer } from "./RadioGroupRenderer";

export class RadioGroup extends Component.implement(FormElement) {
    init(...args) {
        super.init(...args);
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

    onRadioChange(checked, name) {
        this.onChange(checked ? name : "");
    }
}

RadioGroup.initPropTypes(RadioGroupPropTypes).initDefaultProps({
    renderer: RadioGroupRenderer
});
