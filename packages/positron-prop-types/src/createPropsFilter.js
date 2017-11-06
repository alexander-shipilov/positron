import { filter } from "positron-core";

export function createPropsFilter(PropTypes) {
    return (props) => filter(props, (prop, key) => {
        return PropTypes.hasOwnProperty(key) || key.indexOf("data-") === 0 || key.indexOf("aria-") === 0;
    });
}
