import { IntlFormatter } from "positron-core/intl";
import { isClass } from "positron-core/prop-types";
import PropTypes from "prop-types";
import { ComponentRenderer } from "./ComponentRenderer";

export const ComponentPropTypes = {
    renderer: isClass(ComponentRenderer),
    intl: PropTypes.instanceOf(IntlFormatter)
};
