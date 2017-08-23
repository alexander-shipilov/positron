import { ComponentRenderer } from "/ui/Component";
import { filterElementProps } from "/ui/Element";
import marked from "marked";
import React from "react";

export class MarkdownRenderer extends ComponentRenderer {
    static render(markdown) {
        const { children } = markdown.props;

        return (
            <div { ...filterElementProps(markdown.props) } className={ markdown.block() }
                dangerouslySetInnerHTML={ { __html: marked(children) } } />
        );
    }
}
