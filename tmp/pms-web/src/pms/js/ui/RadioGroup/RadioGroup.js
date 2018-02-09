import { compact, forEach } from "positron-core";
import PropTypes from "prop-types";
import React from "react";
import { Component } from "ui/Component";
import { FormField } from "ui/FormField";
import { Radio } from "ui/Radio";

export class RadioGroup extends Component {
    static get name() {
        return "RadioGroup";
    }

    static propTypes = compact(
        FormField.propTypes,
        {
            name: PropTypes.string,
            value: PropTypes.string,
            options: PropTypes.object,
            right: PropTypes.bool,
            inline: PropTypes.bool,
            onChange: PropTypes.func
        }
    );

    static defaultProps = {};

    onChange = (checked, name, event) => {
        const { onChange } = this.props;
        const value = event.currentTarget.getAttribute("data-value");

        if (onChange) {
            onChange(value, name);
        }
    };

    renderOption(value, option) {
        const { value: selectedValue } = this.props;

        return (
            <Radio key={ value } { ...Radio.filterProps(this.props, { children: false }) }
                data-value={ value }
                value={ value === selectedValue }
                className={ this.element("option") }
                onChange={ this.onChange }>
                { option }
            </Radio>
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
