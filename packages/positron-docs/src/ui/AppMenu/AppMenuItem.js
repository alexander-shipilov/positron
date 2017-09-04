import { Component } from "positron-ui/src/ui/Component";

import "./AppMenu.scss";
import { AppMenuItemPropTypes } from "./AppMenuItemPropTypes";
import { AppMenuItemRenderer } from "./AppMenuItemRenderer";

export class AppMenuItem extends Component {
    onToggleClick = () => {
        const { item, actions: { toggleExpanded } } = this.props;

        toggleExpanded.trigger(item);
    };
}

AppMenuItem.initPropTypes(AppMenuItemPropTypes).initDefaultProps({
    renderer: AppMenuItemRenderer
});
