import { createPropsFilter, isClass } from "positron-core/src/prop-types";
import { ElementPropTypes } from "positron-ui/src/ui/Element";
import { ExampleRenderer } from "./ExampleRenderer";

export const ExamplePropTypes = Object.assign({}, ElementPropTypes, {
    renderer: isClass(ExampleRenderer)
});

export const filterExampleProps = createPropsFilter(ExamplePropTypes);
