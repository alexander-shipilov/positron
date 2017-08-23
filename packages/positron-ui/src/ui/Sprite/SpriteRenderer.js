import { ComponentRenderer } from "/ui/Component";
import React from "react";

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
