import { filterToggleProps, Toggle } from "/Toggle";
import React from "react";

export const RadioButtonRenderer = {
    render(checkBox) {
        const { children } = checkBox.props;
        const toggleProps = filterToggleProps(checkBox.props);

        return (
            <Toggle { ...toggleProps } type="radio" className={ checkBox.block() }>
                { children }
            </Toggle>
        );
    }
};
