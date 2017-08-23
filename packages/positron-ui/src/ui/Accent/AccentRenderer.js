import { ComponentRenderer } from "/ui/Component";
import { filterElementProps } from "/ui/Element";
import React from "react";

export class AccentRenderer extends ComponentRenderer {
    static render(accent) {
        const { children, accent: accentColor } = accent.props;

        return (
            <div { ...filterElementProps(accent.props) } className={ accent.block({ [accentColor]: true }) }>
                { children }
            </div>
        );
    }
}
