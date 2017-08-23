import { createPropsFilter, isClass } from "positron-core/prop-types";
import PropTypes from "prop-types";
import { ElementPropTypes } from "/ui/Element/index";
import { InstallationRenderer } from "./InstallationRenderer";

export const InstallationPropTypes = Object.assign({}, ElementPropTypes, {
    renderer: isClass(InstallationRenderer)
});

export const filterInstallationProps = createPropsFilter(InstallationPropTypes);
