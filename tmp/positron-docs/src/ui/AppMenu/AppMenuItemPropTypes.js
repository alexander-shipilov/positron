import { createPropsFilter, isClass } from "positron-core/src/prop-types";
import { ElementPropTypes } from "positron-ui/src/ui/Element";
import PropTypes from "prop-types";
import { AppMenuActions, AppMenuEntry } from "../../store/AppMenu";
import { AppMenuItemRenderer } from "./AppMenuItemRenderer";

export const AppMenuItemPropTypes = Object.assign({}, ElementPropTypes, {
    renderer: isClass(AppMenuItemRenderer),
    item: PropTypes.instanceOf(AppMenuEntry).isRequired,
    actions: PropTypes.instanceOf(AppMenuActions).isRequired
});

export const filterAppMenuItemProps = createPropsFilter(AppMenuItemPropTypes);