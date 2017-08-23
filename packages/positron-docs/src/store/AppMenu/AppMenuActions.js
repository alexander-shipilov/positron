import { Action } from "positron-core/dataflow";
import PropTypes from "prop-types";
import { AppMenuEntry } from "./AppMenuModel";

export class AppMenuActions {
    toggleExpanded = new Action(PropTypes.instanceOf(AppMenuEntry).isRequired);
}
