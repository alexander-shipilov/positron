import { compact, forEach } from "positron-core";
import { ImmutableArray } from "positron-immutable";
import PropTypes from "prop-types";
import React from "react";
import { Component } from "ui/Component";
import { CheckBox } from "ui/CheckBox";
import { FormField } from "ui/FormField";
import { Radio } from "ui/Radio";

export class CheckBoxGroup extends Component {
    static get name() {
        return "CheckBoxGroup";
    }

    static propTypes = compact(
        FormField.propTypes,
        {
            name: PropTypes.string,
            value: PropTypes.instanceOf(ImmutableArray),
            options: PropTypes.object,
            right: PropTypes.bool,
            inline: PropTypes.bool,
            onChange: PropTypes.func
        }
    );

    static defaultProps = {};

    onChange = (checked, name, event) => {
        const { value: currValue, onChange } = this.props;
        const value = event.currentTarget.getAttribute("data-value");

        if (onChange) {
            onChange(checked ? currValue.push(value) : currValue.splice(currValue.indexOf(value), 1), name);
        }
    };

    renderOption(value, option) {
        const { value: currValue } = this.props;

        return (
            <CheckBox key={ value } { ...CheckBox.filterProps(this.props, { children: false }) }
                value={ currValue ? currValue.indexOf(value) !== -1 : false }
                data-value={ value }
                className={ this.element("option") } onChange={ this.onChange }>
                { option }
            </CheckBox>
        );
    }

    renderChildren() {
        const children = [];

        forEach(this.props.options, (option, value) => {
            children.push(this.renderOption(value, option));
        });

        return children;
    }

    render() {
        const { inline, children } = this.props;

        return (
            <FormField { ...FormField.filterProps(this.props) } className={ this.block({ inline }) }>
                { this.renderChildren() }
                { children }
            </FormField>
        );
    }
}
