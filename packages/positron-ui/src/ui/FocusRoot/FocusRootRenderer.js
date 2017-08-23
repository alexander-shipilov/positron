import React from "react";

export const FocusRootRenderer = {
    render(focusManager) {
        const { children } = focusManager.props;

        return (
            <div ref="root" className={ focusManager.block() } onKeyDown={ focusManager.onKeyDown }>
                { children }
            </div>
        );
    }
};
