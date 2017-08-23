import PropTypes from "prop-types";
import { Action } from "../dataflow/Action";

export class IntlActions {
    setLocale = new Action(PropTypes.string.isRequired);
    setMessages = new Action(PropTypes.object.isRequired, PropTypes.string);
}
