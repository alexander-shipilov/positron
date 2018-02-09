import { compact } from "positron-core";
import PropTypes from "prop-types";
import React from "react";
import { Component } from "ui/Component";
import { DropOwner } from "ui/Drop";
import { TextField } from "ui/TextField";
import { List, ListOption } from "ui/List";

export class Select extends Component {
    static get name() {
        return "Select";
    }

    static propTypes = compact(
        TextField.propTypes,
        {
            list: PropTypes.element,
            label: PropTypes.node,
            dropAlign: PropTypes.string,
            options: PropTypes.object
        }
    );

    static defaultProps = {
        dropAlign: "bt ch | tb ch",
        options: {}
    };

    state = { dropVisible: false };

    onMouseDown = () => {
        this.setDropVisibleState(!this.state.dropVisible);
    };

    onChange = (value) => {
        const { name, onChange } = this.props;

        if (onChange) {
            onChange(value, name);
        }
    };

    hideDrop = () => {
        this.setDropVisibleState(false);
    };

    onListChange = (value) => {
        this.onChange(value);
        this.hideDrop();
    };


    setDropVisibleState(dropVisible) {
        this.setState({ dropVisible });
    }

    renderList() {
        const { options, list, value } = this.props;
        const listProps = { value, options, onChange: this.onListChange };

        return list
            ? React.cloneElement(list, compact(listProps, {
                className: this.element("list", null, list.props.className)
            }))
            : <List { ...listProps } className={ this.element("list") } />;
    }

    renderLabel() {
        const { options, value } = this.props;
        const label = options[value];

        return label
            ? (
                typeof label === "string"
                    ? (
                        <ListOption className={ this.element("label") }>
                            { label }
                        </ListOption>
                    )
                    : React.cloneElement(label, { className: this.element("label", null, label.props.className) })
            )
            : null;
    }

    render() {
        const { options, disabled, value, placeholder, dropAlign } = this.props;
        const { dropVisible } = this.state;

        return (
            <DropOwner id="select" drop={ this.renderList() }
                dropVisible={ dropVisible } dropAlign={ dropAlign } hideDrop={ this.hideDrop }
                className={ this.block({ dropVisible }) }>
                <TextField ref={ this.ref("component") }
                    { ...TextField.filterProps(this.props, { onChange: false, value: false, list: false }) }
                    type="text"
                    disabled={ disabled || Object.keys(options).length === 0 }
                    readOnly={ true }
                    placeholder={ options[value] ? "" : placeholder }
                    feedback={ dropVisible ? "angle-up" : "angle-down" }
                    className={ this.element("text") }
                    onMouseDown={ this.onMouseDown }>

                    { this.renderLabel() }
                </TextField>
            </DropOwner>
        );
    }
}
