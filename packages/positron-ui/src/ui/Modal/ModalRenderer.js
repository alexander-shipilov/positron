import React, { Children, cloneElement } from "react";

export const ModalRenderer = {
    renderOverlay(modal) {
        return <div className={ modal.element("overlay") } />;
    },

    renderChildren(modal) {
        const { close, props: { children, props } } = modal;

        return Children.map(children, (child) => cloneElement(child, Object.assign(props, { close })));
    },

    renderContent(modal) {
        return (
            <div className={ modal.element("content") }>
                { this.renderChildren(modal) }
            </div>
        );
    },

    render(modal) {
        return (
            <div className={ modal.block() }>
                { this.renderOverlay(modal) }
                { this.renderContent(modal) }
            </div>
        );
    }
};
