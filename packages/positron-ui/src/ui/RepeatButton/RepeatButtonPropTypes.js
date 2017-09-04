import { createPropsFilter } from "positron-core/src/prop-types";
import PropTypes from "prop-types";
import { ElementPropTypes } from "../Element";

export const RepeatButtonPropTypes = Object.assign({}, ElementPropTypes, {
    interval: PropTypes.number,
    firstInterval: PropTypes.number,
    onTick: PropTypes.func,
    onTickStop: PropTypes.func
});

export const filterRepeatButtonProps = createPropsFilter(RepeatButtonPropTypes);
