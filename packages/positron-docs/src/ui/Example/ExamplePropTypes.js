import { createPropsFilter, isClass } from "positron-core/prop-types";
import PropTypes from "prop-types";
import { ElementPropTypes } from "/ui/Element";
import { ExampleRenderer } from "./ExampleRenderer";

export const ExamplePropTypes = Object.assign({}, ElementPropTypes, {
    renderer: isClass(ExampleRenderer)
});

export const filterExampleProps = createPropsFilter(ExamplePropTypes);
