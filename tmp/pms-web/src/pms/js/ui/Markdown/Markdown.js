import markdownIt from "markdown-it";
import { compact } from "positron-core";
import { Element } from "positron-prop-types";
import PropTypes from "prop-types";
import { Children, cloneElement, createElement } from "react";
import { Component } from "ui/Component";

const markdown = markdownIt({
    html: true,
    linkify: false,
    typographer: false
});

export class Markdown extends Component {
    static defaultProps = {
        inline: true
    };

    static propTypes = compact(
        Element.propTypes,
        {
            colored: PropTypes.bool,
            inline: PropTypes.bool,
            children: PropTypes.node
        }
    );

    renderMarkdown(text) {
        const { inline } = this.props;

        if (inline) {
            text = String(text).replace(/\n/g, "<br />");
        }

        return inline ? markdown.renderInline(text) : markdown.render(text);
    }

    processChild(children) {
        const { colored, inline } = this.props;

        return Children.map(children, (child) => {
            if (typeof child === "string") {
                child = createElement(inline ? "span" : "div", compact(
                    Element.filterProps(this.props),
                    {
                        children: void 0,
                        dangerouslySetInnerHTML: { __html: this.renderMarkdown(child) },
                        className: this.block({ colored, inline, block: !inline })
                    }
                ));
            } else if (child) {
                const { children, className } = child.props;

                child = cloneElement(child, {
                    children: void 0,
                    dangerouslySetInnerHTML: { __html: this.renderMarkdown(children) },
                    className: this.block({ colored, inline, block: !inline }, className)
                });
            }

            return child;
        });
    }

    render() {
        const children = this.processChild(this.props.children);

        return children ? children[0] : null;
    }
}
