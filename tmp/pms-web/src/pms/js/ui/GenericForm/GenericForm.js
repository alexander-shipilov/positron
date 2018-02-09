import { compact } from "positron-core";
import { IntlFormatter } from "positron-intl";
import PropTypes from "prop-types";
import React from "react";
import { Component } from "ui/Component";
import { Form, FormButtons, FormCancel, FormMessage, FormSubmit } from "ui/Form";
import { FormFields } from "ui/FormFields";

export class GenericForm extends Component {
    static propTypes = compact(
        Form.propTypes,
        {
            intl: PropTypes.instanceOf(IntlFormatter),
            buttons: PropTypes.oneOfType([PropTypes.bool, PropTypes.node]),
            cancel: PropTypes.oneOfType([PropTypes.bool, PropTypes.node]),
            submit: PropTypes.oneOfType([PropTypes.bool, PropTypes.node]),
            success: PropTypes.bool,
            message: PropTypes.node,
            onCancel: PropTypes.func
        }
    );

    static defaultProps = compact(
        Form.defaultProps,
        {
            header: true,
            buttons: true,
            close: true,
            autoComplete: false,
            submit: true,
            cancel: true
        }
    );

    static messages = require("./messages");

    renderFields() {
        return (
            <FormFields className={ this.element("fields") }>
                { this.props.children }
                { this.renderMessage() }
            </FormFields>
        );
    }

    renderSubmit() {
        const { submit, busy, disabled } = this.props;

        return submit === true || typeof submit === "string"
            ? (
                <FormSubmit { ...{ busy, disabled } } className={ this.element("submit") }>
                    { submit === true ? this.formatMessage("submit") : submit }
                </FormSubmit>
            )
            : submit || null;
    }

    renderCancel() {
        const { cancel, onCancel } = this.props;

        return cancel === true || typeof cancel === "string"
            ? (
                <FormCancel { ...{ onClick: onCancel } } className={ this.element("cancel") }>
                    { cancel === true ? this.formatMessage("cancel") : cancel }
                </FormCancel>
            )
            : cancel || null;
    }

    renderSuccess() {
        const { success, message } = this.props;

        return success && message ? <FormMessage type="success">{ message }</FormMessage> : null;
    }

    renderMessage() {
        const { error, success, message } = this.props;
        const type = error ? "error" : success ? "success" : "message";

        return message ? (
            <FormMessage type={ type }>{ message }</FormMessage>
        ) : null;
    }

    renderButtons() {
        const { buttons } = this.props;

        return buttons === true
            ? (
                <FormButtons className={ this.element("buttons") }>
                    { this.renderSubmit() }
                    { this.renderCancel() }
                </FormButtons>
            )
            : buttons || null;
    }

    render() {
        const { error } = this.props;

        return (
            <Form { ...Form.filterProps(this.props, "title") } error={ Boolean(error) } className={ this.block() }>
                { this.renderFields() }
                { this.renderButtons() }
            </Form>
        );
    }
}
