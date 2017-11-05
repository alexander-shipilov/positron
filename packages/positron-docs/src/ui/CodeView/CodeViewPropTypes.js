import { createPropsFilter, isClass } from "positron-core/src/prop-types";
import PropTypes from "prop-types";
import { ElementPropTypes } from "../Element";
import { CodeViewRenderer } from "./CodeViewRenderer";

export const CodeViewPropTypes = Object.assign({}, ElementPropTypes, {
    renderer: isClass(CodeViewRenderer)
});

export const filterCodeViewProps = createPropsFilter(CodeViewPropTypes);
