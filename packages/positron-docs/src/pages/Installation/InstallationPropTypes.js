import { createPropsFilter, isClass } from "positron-core/src/prop-types";
import { ElementPropTypes } from "positron-ui/src/ui/Element";
import { InstallationRenderer } from "./InstallationRenderer";

export const InstallationPropTypes = Object.assign({}, ElementPropTypes, {
    renderer: isClass(InstallationRenderer)
});

export const filterInstallationProps = createPropsFilter(InstallationPropTypes);
