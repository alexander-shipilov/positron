import { createPropsFilter } from "positron-core/src/prop-types";
import PropTypes from "prop-types";
import { RequiredElementPropTypes } from "./_RequiredElement";
import { InputPropTypes } from "./Input";

export const InputFilePropTypes = Object.assign({}, InputPropTypes, RequiredElementPropTypes, {
    accept: PropTypes.string,
    capture: PropTypes.bool,
    multiple: PropTypes.bool
});

export const filterInputFileProps = createPropsFilter(InputFilePropTypes);
