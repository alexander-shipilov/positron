import { compact } from "positron-core";
import { IntlFormatter } from "positron-intl";
import PropTypes from "prop-types";
import React from "react";
import { Component } from "ui/Component";
import { FormField } from "ui/FormField";
import { GenericForm } from "ui/GenericForm";
import { forEachChildren, mapChildren } from "utils/react";

import { FormActions } from "./FormActions";
import { FormModel } from "./FormModel";

export class FormView extends Component {
    static get name() {
        return "FormView";
    }

    static propTypes = compact(
        GenericForm.propTypes,
        {
            actions: PropTypes.instanceOf(FormActions),
            data: PropTypes.instanceOf(FormModel).isRequired,
            intl: PropTypes.instanceOf(IntlFormatter).isRequired,
            item: PropTypes.object
        }
    );

    static defaultProps = compact(
        GenericForm.defaultProps
    );

    onFieldChange = (value, name) => {
        this.setFieldValue(name, value);
    };

    setItem(item) {
        const { actions } = this.props;

        if (actions) {
            actions.setItem.trigger(item);
        }
    }

    setFieldValue(name, value) {
        const { actions } = this.props;

        if (actions && name) {
            actions.setFieldValue.trigger(name, value);
        }
    }

    componentWillMount() {
        this.setItem(this.props.item);
    }

    componentWillUnmount() {
        this.setItem(null);
    }

    componentWillReceiveProps({ item }) {
        if (this.props.item !== item) {
            this.setItem(item);
        }
    }

    processField({ props }) {
        const { data: { errors } } = this.props;
        const nextProps = {};

        let error;
        forEachChildren(props.children, ({ props }) => {
            if (errors && !error && props.name) {
                error = errors[props.name];
            }
        });

        if (error) {
            Object.assign(nextProps, {
                help: error
            });
        }

        return nextProps;
    }

    processInput({ props }) {
        const { data: { item } } = this.props;
        const { name } = props;
        const nextProps = {};

        if (!props.hasOwnProperty("value")) {
            nextProps.value = item[name];
        }

        if (!props.hasOwnProperty("onChange")) {
            nextProps.onChange = this.onFieldChange;
        }

        return nextProps;
    }

    renderChildren() {
        const { intl } = this.props;

        return mapChildren(this.props.children, (child) => {
            const { type, props } = child;
            const nextProps = type === FormField
                ? this.processField(child)
                : props.name ? this.processInput(child) : null;

            return child.type.prototype instanceof Component ? Object.assign({ intl }, nextProps) : nextProps;
        });
    }

    render() {
        const { intl, data, disabled } = this.props;

        if (!data.item) {
            return null;
        }

        return (
            <GenericForm { ...{ intl } } { ...GenericForm.filterProps(this.props) } busy={ data.busy }
                disabled={ disabled }
                className={ this.block() }>
                { this.renderChildren() }
            </GenericForm>
        );
    }
}
