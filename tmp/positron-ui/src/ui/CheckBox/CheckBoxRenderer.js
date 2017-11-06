import { filterToggleProps, Toggle } from "/Toggle";
import React from "react";

export const CheckBoxRenderer = {
    render(checkBox) {
        const { children } = checkBox.props;
        const toggleProps = filterToggleProps(checkBox.props);

        return (
            <Toggle { ...toggleProps } type="checkbox" className={ checkBox.block() }>
                { children }
            </Toggle>
        );
    }
};
