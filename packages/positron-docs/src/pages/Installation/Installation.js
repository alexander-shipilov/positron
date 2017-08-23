import { Component } from "/ui/Component/index";

import "./Installation.scss";
import { InstallationPropTypes } from "./InstallationPropTypes";
import { InstallationRenderer } from "./InstallationRenderer";
import InstallationMessages from "./InstallationMessages";

import { intl } from "../../init";
intl.actions.setMessages.trigger(InstallationMessages);


export class Installation extends Component {
}

Installation.initPropTypes(InstallationPropTypes).initDefaultProps({
    renderer: InstallationRenderer
});
