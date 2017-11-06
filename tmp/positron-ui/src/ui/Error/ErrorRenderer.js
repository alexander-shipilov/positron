import React from "react";

export const ErrorRenderer = {
    render(error) {
        const { children } = error.props;

        return (
            <div className={ error.block() }>
                { children }
            </div>
        );
    }
};
