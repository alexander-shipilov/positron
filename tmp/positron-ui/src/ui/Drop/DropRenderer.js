import React from "react";
import { ComponentRenderer } from "../Component";
import { filterElementProps } from "../Element";

export class DropRenderer extends ComponentRenderer {
    static render(drop) {
        const { id, render, owner, owner: { props: { renderer } } } = drop.props;
        const elementProps = filterElementProps(drop.props);

        return (
            <div { ...elementProps } ref={ this.ref(drop, "drop") } className={ drop.block({ [id]: true }) }>
                { render.call(renderer, owner) }
            </div>
        );
    }
}
