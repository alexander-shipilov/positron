import { compact, nvl } from "positron-core";
import { InputText as InputTextProps, TextArea as TextAreaProps } from "positron-prop-types";
import React from "react";
import { Component } from "ui/Component";

export class InputText extends Component {
    static get name() {
        return "InputText";
    }

    static propTypes = compact(
        InputTextProps.propTypes,
        TextAreaProps.propTypes
    );

    static defaultProps = {
        value: "",
        rows: 1
    };

    currPos = 0;

    onChange = (event) => {
        const { target: { selectionEnd, value } } = event;
        const { onChange } = this.props;

        event.preventDefault();
        this.currPos = selectionEnd || 0;

        if (onChange) {
            onChange(value);
        }
    };

    componentWillMount() {
        this.currPos = (this.props.value || "").length;
    }

    setSelection() {
        const { input, currPos } = this;

        if (input && input.type === "text" || input.type === "password") {
            input.setSelectionRange(currPos, currPos);
        }
    }

    componentDidUpdate() {
        this.setSelection();
    }

    renderTextArea() {
        const { value } = this.props;

        return (
            <textarea ref={ this.ref("input") }
                { ...TextAreaProps.filterProps(this.props) }
                className={ this.block({ type: "text-area" }) }
                value={ nvl(value, "") }
                onChange={ this.onChange } />
        );
    }

    renderInput() {
        const { input, type, value } = this.props;

        return (
            <input ref={ this.ref("input") }
                { ...InputTextProps.filterProps(this.props) }
                value={ nvl(value, "") }
                className={ this.block({ type }) }
                onChange={ this.onChange } />
        );
    }

    render() {
        const { rows } = this.props;

        return rows > 1 ? this.renderTextArea() : this.renderInput();
    }
}
