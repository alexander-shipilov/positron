import React from "react";
import { filterInputButtonProps } from "/ui/Element";

export const ButtonRenderer = {
    render(button) {
        const { type, children, disabled } = button.props;

        return (
            <button { ...filterInputButtonProps(button.props) } className={ button.block({ type, disabled }) }>
                { children }
            </button>
        );
    }
};
