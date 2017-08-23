import { ACCENTS } from "positron-core/constants/accents";
import { Action } from "positron-core/dataflow";
import PropTypes from "prop-types";

export class AppSettingsActions {
    setAccent = new Action(PropTypes.oneOf(ACCENTS).isRequired);
    setExpanded = new Action(PropTypes.bool.isRequired);
}
