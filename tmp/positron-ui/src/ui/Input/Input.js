import { Component } from "/Component";

import "./Input.scss";
import { InputPropTypes } from "./InputPropTypes";
import { InputRenderer } from "./InputRenderer";

export class Input extends Component {
}

Input.initPropTypes(InputPropTypes).initDefaultProps({
    renderer: InputRenderer,
    error: false,
    disabled: false,
    readOnly: false,
    value: ""
});
