import { createPropsFilter, isClass } from "positron-core/src/prop-types";
import PropTypes from "prop-types";
import { AppMenuActions, AppMenuModel } from "../../store/AppMenu";
import { AppSettingsActions, AppSettingsModel } from "../../store/AppSettings";
import { AppRenderer } from "./AppRenderer";

export const AppPropTypes = {
    menu: PropTypes.instanceOf(AppMenuModel).isRequired,
    menuActions: PropTypes.instanceOf(AppMenuActions).isRequired,
    renderer: isClass(AppRenderer),
    settings: PropTypes.instanceOf(AppSettingsModel).isRequired,
    settingsActions: PropTypes.instanceOf(AppSettingsActions).isRequired
};

export const filterAppProps = createPropsFilter(AppPropTypes);
