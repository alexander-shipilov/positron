import { createPropsFilter } from "positron-core/prop-types";
import PropTypes from "prop-types";
import { AppMenuActions, AppMenuModel } from "../../store/AppMenu";

export const AppMenuPropTypes = {
    items: PropTypes.instanceOf(AppMenuModel).isRequired,
    actions: PropTypes.instanceOf(AppMenuActions).isRequired
};

export const filterAppMenuProps = createPropsFilter(AppMenuPropTypes);
