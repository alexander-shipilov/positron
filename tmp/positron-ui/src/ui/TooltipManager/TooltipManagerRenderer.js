import React from "react";

export const TooltipManagerRenderer = {
    render(tooltipManager) {
        return (
            <div className={ tooltipManager.block() }>
            </div>
        );
    }
};
