import { createPropsFilter } from "positron-core/prop-types";
import PropTypes from "prop-types";
import { ElementPropTypes } from "./Element";

export const AnchorPropTypes = Object.assign({}, ElementPropTypes, {
    download: PropTypes.bool,
    href: PropTypes.string,
    hrefLang: PropTypes.string,
    rel: PropTypes.string,
    target: PropTypes.string,
    type: PropTypes.string
});

export const filterAnchorProps = createPropsFilter(AnchorPropTypes);
