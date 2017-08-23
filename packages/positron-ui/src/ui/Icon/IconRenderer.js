import { ComponentRenderer } from "/ui/Component";
import { filterElementProps } from "/ui/Element";
import React from "react";

export class IconRenderer extends ComponentRenderer {
    static render(icon) {
        const { iconset, glyph } = icon.props;

        return (
            <i { ...filterElementProps(icon.props) } className={ icon.block({ [iconset]: true, [glyph]: true }) } />
        );
    }
}
