import { compact, forEach } from "positron-core";
import { Element } from "positron-prop-types";
import PropTypes from "prop-types";
import React from "react";
import { Component } from "ui/Component";
import { ListOption } from "./ListOption";

export class List extends Component {
    static get name() {
        return "List";
    }

    static propTypes = compact(
        Element.propTypes,
        {
            options: PropTypes.object,
            onChange: PropTypes.func
        }
    );

    static defaultProps = {
        options: {}
    };

    onChange = (value) => {
        const { onChange, options } = this.props;

        if (onChange) {
            onChange(value, options[value]);
        }
    };

    onOptionClick = (event) => {
        this.onChange(event.currentTarget.getAttribute("data-value"));
    };

    renderOption(value, label) {
        const { value: selectedValue } = this.props;

        const optionProps = {
            key: value,
            selected: String(selectedValue) === String(value),
            ["data-value"]: value,
            onClick: this.onOptionClick
        };

        return typeof label === "string"
            ? (
                <ListOption { ...optionProps } className={ this.element("option") }>
                    { label }
                </ListOption>
            )
            : React.cloneElement(label, compact(optionProps, {
                className: this.element("option", null, label.props.className)
            }));
    }

    renderChildren() {
        const { options } = this.props;
        const children = [];

        forEach(options, (option, value) => {
            children.push(this.renderOption(value, option));
        });

        return children;
    }

    render() {
        return (
            <div className={ this.block() }>
                { this.renderChildren() }
            </div>
        );
    }
}
