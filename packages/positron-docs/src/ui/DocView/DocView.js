import { Component } from "positron-ui/src/ui/Component";

import "./DocView.scss";
import { DocViewPropTypes } from "./DocViewPropTypes";
import { DocViewRenderer } from "./DocViewRenderer";

export class DocView extends Component {
}

DocView.initPropTypes(DocViewPropTypes).initDefaultProps({
    renderer: DocViewRenderer
});
