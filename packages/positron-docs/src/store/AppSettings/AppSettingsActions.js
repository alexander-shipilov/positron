import { ACCENTS } from "positron-core/src/constants/accents";
import { Action } from "positron-core/src/dataflow";
import PropTypes from "prop-types";

export class AppSettingsActions {
    setAccent = new Action(PropTypes.oneOf(ACCENTS).isRequired);

    setExpanded = new Action(PropTypes.bool.isRequired);
}
