import { Action } from "positron-core/src/dataflow";
import PropTypes from "prop-types";
import { AppMenuEntry } from "./AppMenuModel";

export class AppMenuActions {
    toggleExpanded = new Action(PropTypes.instanceOf(AppMenuEntry).isRequired);
}
