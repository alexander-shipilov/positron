import { Component } from "/ui/Component";

import "./AppMenu.scss";
import { AppMenuPropTypes } from "./AppMenuPropTypes";
import { AppMenuRenderer } from "./AppMenuRenderer";

export class AppMenu extends Component {
}

AppMenu.initPropTypes(AppMenuPropTypes).initDefaultProps({
    renderer: AppMenuRenderer
});
