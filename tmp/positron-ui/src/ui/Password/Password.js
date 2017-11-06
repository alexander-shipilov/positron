import { Component } from "/Component";

import "./Password.scss";
import { PasswordPropTypes } from "./PasswordPropTypes";
import { PasswordRenderer } from "./PasswordRenderer";

export class Password extends Component {
}

Password.initPropTypes(PasswordPropTypes).initDefaultProps({
    renderer: PasswordRenderer
});
