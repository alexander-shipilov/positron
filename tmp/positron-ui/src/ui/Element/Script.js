import { createPropsFilter } from "positron-core/src/prop-types";
import PropTypes from "prop-types";
import { ElementPropTypes } from "./Element";

export const ScriptPropTypes = Object.assign({}, ElementPropTypes, {
    async: PropTypes.bool,
    crossOrigin: PropTypes.string,
    defer: PropTypes.bool,
    integrity: PropTypes.string,
    src: PropTypes.string,
    type: PropTypes.string
});

export const filterScriptProps = createPropsFilter(ScriptPropTypes);
