import { ACCENTS } from "positron-core/src/constants/accents";
import { createPropsFilter } from "positron-core/src/prop-types";
import PropTypes from "prop-types";
import { ElementPropTypes } from "../Element";

export const AccentPropTypes = Object.assign({}, ElementPropTypes, {
    accent: PropTypes.oneOf(ACCENTS).isRequired
});

export const filterAccentProps = createPropsFilter(AccentPropTypes);
