import { OVERFLOWS } from "positron-core/src/constants/overflows";
import { createPropsFilter } from "positron-core/src/prop-types";
import PropTypes from "prop-types";

export const ScrollAreaPropTypes = {
    overflowX: PropTypes.oneOf(OVERFLOWS).isRequired,
    overflowY: PropTypes.oneOf(OVERFLOWS).isRequired
};

export const filterScrollAreaProps = createPropsFilter(ScrollAreaPropTypes);
