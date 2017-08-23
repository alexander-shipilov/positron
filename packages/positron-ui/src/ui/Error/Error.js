import { Component } from "/Component";

import "./Error.scss";
import { ErrorPropTypes } from "./ErrorPropTypes";
import { ErrorRenderer } from "./ErrorRenderer";

export class Error extends Component {
}

Error.initPropTypes(ErrorPropTypes).initDefaultProps({
    renderer: ErrorRenderer
});
