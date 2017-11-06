import { Component } from "/Component";
import { FormElement } from "../FormElement";

import "./CheckBoxGroup.scss";
import { CheckBoxGroupPropTypes } from "./CheckBoxGroupPropTypes";
import { CheckBoxGroupRenderer } from "./CheckBoxGroupRenderer";

export class CheckBoxGroup extends Component.implement(FormElement) {
    onCheckBoxChange = (checked, name) => {
        const { value } = this.props;
        const nextValue = checked ? value.concat(name) : value.filter((value) => value !== name);

        this.onChange(nextValue);
    };

    constructor(...args) {
        super(...args);

        this.initFormElement();
    }

    getOptionValue(option, index) {
        return this.props.renderer.getOptionValue(option, index);
    }

    isSelected(optionValue) {
        const { value } = this.props;

        return value.indexOf(optionValue) !== -1;
    }
}

CheckBoxGroup.initPropTypes(CheckBoxGroupPropTypes).initDefaultProps({
    renderer: CheckBoxGroupRenderer
});
