import { InputPropTypes } from "/Input";
import { isArrayLike, createPropsFilter } from "positron-core/prop-types";
import PropTypes from "prop-types";

const ListAnyValueType = PropTypes.any;
const ListArrayValueType = isArrayLike;

export function ListValueType(props, ...rest) {
    const multiple = props.multiple;

    return (multiple ? ListArrayValueType : ListAnyValueType)(props, ...rest);
}

export const ListPropTypes = Object.assign({}, InputPropTypes, {
    multiple: PropTypes.bool,
    options: isArrayLike,
    value: ListValueType
});

export const filterListProps = createPropsFilter(ListPropTypes);
