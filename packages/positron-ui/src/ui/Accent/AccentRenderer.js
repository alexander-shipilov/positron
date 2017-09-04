import React from "react";
import { ComponentRenderer } from "../Component";
import { filterElementProps } from "../Element";

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
