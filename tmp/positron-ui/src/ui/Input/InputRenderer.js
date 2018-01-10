import React from "react";
import { filterElementProps } from "../Element";

export const InputRenderer = {
    render(input) {
        const { children, disabled, error, focus, readOnly } = input.props;
        const { elementProps } = filterElementProps(input.props);

        return (
            <div { ...elementProps } className={ input.block({ disabled, error, focus, readOnly }) }>
                { children }
            </div>
        );
    }
};