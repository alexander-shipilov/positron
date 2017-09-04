import { Component } from "../Component";

import "./Icon.scss";
import { IconPropTypes } from "./IconPropTypes";
import { IconRenderer } from "./IconRenderer";

export class Icon extends Component {
}

Icon.initPropTypes(IconPropTypes).initDefaultProps({
    renderer: IconRenderer
});
