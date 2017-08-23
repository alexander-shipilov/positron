import React from "react";

export const SpinnerRenderer = {
    render(spinner) {
        const { props: { size, align } } = spinner;

        return (
            <div className={ spinner.block({ size, align }) } />
        );
    }
};
