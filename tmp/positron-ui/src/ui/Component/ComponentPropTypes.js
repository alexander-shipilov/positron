import { IntlFormatter } from "positron-core/src/intl";
import { isClass } from "positron-core/src/prop-types";
import PropTypes from "prop-types";
import { ComponentRenderer } from "./ComponentRenderer";

export const ComponentPropTypes = {
    renderer: isClass(ComponentRenderer),
    intl: PropTypes.instanceOf(IntlFormatter)
};
