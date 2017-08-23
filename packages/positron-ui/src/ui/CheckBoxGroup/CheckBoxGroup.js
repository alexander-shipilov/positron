import { Component } from "/Component";
import { FormElement } from "/ui/FormElement";

import "./CheckBoxGroup.scss";
import { CheckBoxGroupPropTypes } from "./CheckBoxGroupPropTypes";
import { CheckBoxGroupRenderer } from "./CheckBoxGroupRenderer";

export class CheckBoxGroup extends Component.implement(FormElement) {
    init(...args) {
        super.init(...args);
        this.initFormElement();

        this.onCheckBoxChange = this.onCheckBoxChange.bind(this);
    }

    getOptionValue(option, index) {
        return this.props.renderer.getOptionValue(option, index);
    }

    isSelected(optionValue) {
        const { value } = this.props;

        return value.indexOf(optionValue) !== -1;
    }

    onCheckBoxChange(checked, name) {
        const { value } = this.props;
        const nextValue = checked ? value.concat(name) : value.filter((value) => value !== name);

        this.onChange(nextValue);
    }
}

CheckBoxGroup.initPropTypes(CheckBoxGroupPropTypes).initDefaultProps({
    renderer: CheckBoxGroupRenderer
});
