import { Component } from "../Component";

import "./CodeView.scss";
import { CodeViewPropTypes } from "./CodeViewPropTypes";
import { CodeViewRenderer } from "./CodeViewRenderer";

export class CodeView extends Component {
}

CodeView.initPropTypes(CodeViewPropTypes).initDefaultProps({
    renderer: CodeViewRenderer
});
