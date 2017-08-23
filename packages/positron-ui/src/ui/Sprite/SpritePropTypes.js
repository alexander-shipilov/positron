import { isClass, createPropsFilter } from "positron-core/prop-types";
import PropTypes from "prop-types";
import { SpriteRenderer } from "./SpriteRenderer";

export const SpritePropTypes = {
    renderer: isClass(SpriteRenderer),
    glyph: PropTypes.string
};

export const filterSpriteProps = createPropsFilter(SpritePropTypes);

