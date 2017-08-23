import React from "react";

export const FieldSetRenderer = {
    render(fieldSet) {
        return (
            <div className={ fieldSet.block() }>
            </div>
        );
    }
};
