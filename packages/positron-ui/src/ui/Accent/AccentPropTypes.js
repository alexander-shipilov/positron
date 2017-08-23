import { ElementPropTypes } from "/ui/Element";
import { ACCENTS } from "positron-core/constants/accents";
import { createPropsFilter } from "positron-core/prop-types";
import PropTypes from "prop-types";

export const AccentPropTypes = Object.assign({}, ElementPropTypes, {
    accent: PropTypes.oneOf(ACCENTS).isRequired
});

export const filterAccentProps = createPropsFilter(AccentPropTypes);
