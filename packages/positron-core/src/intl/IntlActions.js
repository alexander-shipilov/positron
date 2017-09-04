import PropTypes from "prop-types";
import { Action } from "../dataflow/Action";

export class IntlActions {
    setLocale = new Action(PropTypes.string.isRequired);
    setLocaleMessages = new Action(PropTypes.string.isRequired, PropTypes.object.isRequired, PropTypes.string);
    setMessages = new Action(PropTypes.object.isRequired, PropTypes.string);
}
