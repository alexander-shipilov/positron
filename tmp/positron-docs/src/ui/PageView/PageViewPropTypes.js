import { createPropsFilter, isClass } from "positron-core/src/prop-types";
import { ElementPropTypes } from "positron-ui/src/ui/Element";
import { PageViewRenderer } from "./PageViewRenderer";

export const PageViewPropTypes = Object.assign({}, ElementPropTypes, {
    renderer: isClass(PageViewRenderer)
});

export const filterPageViewProps = createPropsFilter(PageViewPropTypes);
