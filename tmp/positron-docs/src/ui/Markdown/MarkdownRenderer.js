import marked from "marked";
import { ComponentRenderer } from "positron-ui/src/ui/Component";
import { filterElementProps } from "positron-ui/src/ui/Element";
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
