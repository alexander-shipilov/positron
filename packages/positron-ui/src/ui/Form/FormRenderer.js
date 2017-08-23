import { Error } from "/Error";
import React, { Children } from "react";

export const FormRenderer = {
    processChildren(children) {
        return Children.map(children, (child) => {
            if (child && child.props) {
                const { children, name } = child.props;
                const props = { children: this.processChildren(children) };

                if (name) {
                    props.ref = name;
                }

                child = React.cloneElement(child, props);
            }

            return child;
        });
    },

    renderChildren(form) {
        const { children } = form.props;

        return this.processChildren(children);
    },

    renderErrorMessage(form, error) {
        return error.message;
    },

    renderError(form) {
        const { error } = form.props;

        return (
            <Error className={ form.element("error") }>
                { this.renderErrorMessage(form, error) }
            </Error>
        );
    },

    render(form) {
        const { busy, error, autoComplete } = form.props;
        const className = form.block({ busy, error: Boolean(error) });

        return (
            <form autoComplete={ autoComplete } className={ className } onSubmit={ form.onSubmit }>
                { this.renderChildren(form) }
            </form>
        );
    }
};
