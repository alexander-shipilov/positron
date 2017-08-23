import React from "react";

export const ScrollBarRenderer = {


    render(scrollBar) {
        const { orientation, scroll } = scrollBar.props;

        return (
            <div className={ scrollBar.block({ orientation, disabled: !scroll }) }>
                <i className={ scrollBar.element("icon", { prev: true }) } />
                <div ref="bar" className={ scrollBar.element("bar") }>
                    { scroll ? scrollBar.renderHandle() : null }
                </div>
                <i className={ scrollBar.element("icon", { next: true }) } />
            </div>
        );
    }
};
