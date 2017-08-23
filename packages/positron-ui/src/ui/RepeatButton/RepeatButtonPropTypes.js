import { ElementPropTypes } from "/ui/Element";
import { createPropsFilter } from "positron-core/prop-types";
import PropTypes from "prop-types";

export const RepeatButtonPropTypes = Object.assign({}, ElementPropTypes, {
    interval: PropTypes.number,
    firstInterval: PropTypes.number,
    onTick: PropTypes.func,
    onTickStop: PropTypes.func
});

export const filterRepeatButtonProps = createPropsFilter(RepeatButtonPropTypes);
