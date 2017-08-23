import React from "react";

export const FieldRenderer = {
    renderLabel(field, label) {
        return <label className={ field.element("label") }>{ label }</label>;
    },

    render(field) {
        const { children, error, label } = field.props;

        return (
            <div className={ field.block({ error: Boolean(error), label: Boolean(label) }) }>
                { children }
                { label ? this.renderLabel(field, label) : null }
            </div>
        );
    }
};
