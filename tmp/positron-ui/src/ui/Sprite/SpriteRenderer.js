import React from "react";
import { ComponentRenderer } from "../Component";

export class SpriteRenderer extends ComponentRenderer {
    static render(sprite) {
        const { glyph } = sprite.props;

        return (
            <svg className={ sprite.block() }>
                <use xlinkHref={ glyph } />
            </svg>
        );
    }
}
