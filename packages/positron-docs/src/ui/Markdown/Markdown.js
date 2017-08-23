import { Component } from "/ui/Component";

import "./Markdown.scss";
import { MarkdownPropTypes } from "./MarkdownPropTypes";
import { MarkdownRenderer } from "./MarkdownRenderer";

export class Markdown extends Component {
}

Markdown.initPropTypes(MarkdownPropTypes).initDefaultProps({
    renderer: MarkdownRenderer
});
