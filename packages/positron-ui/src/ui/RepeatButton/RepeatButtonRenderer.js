import { Button, filterButtonProps } from "/Button";
import React from "react";

export const RepeatButtonRenderer = {
    render(repeatButton) {
        const { children } = repeatButton.props;
        const buttonProps = filterButtonProps(repeatButton.props);

        return (
            <Button { ...buttonProps } type="button" className={ repeatButton.block() }>
                { children }
            </Button>
        );
    }
};
