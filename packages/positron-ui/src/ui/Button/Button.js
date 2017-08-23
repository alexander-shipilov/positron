import { Component } from "/Component";

import "./Button.scss";
import { ButtonPropTypes } from "./ButtonPropTypes";
import { ButtonRenderer } from "./ButtonRenderer";

export class Button extends Component {
}

Button.initPropTypes(ButtonPropTypes).initDefaultProps({
    renderer: ButtonRenderer
});
