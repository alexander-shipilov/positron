import React from "react";
import { ComponentRenderer } from "../Component";
import { filterElementProps } from "../Element";

export class IconRenderer extends ComponentRenderer {
    static render(icon) {
        const { iconset, glyph } = icon.props;

        return (
            <i { ...filterElementProps(icon.props) } className={ icon.block({ [iconset]: true, [glyph]: true }) } />
        );
    }
}
