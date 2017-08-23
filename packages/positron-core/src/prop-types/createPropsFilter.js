import { filter } from "../object";

export function createPropsFilter(PropTypes) {
    return (props) => filter(props, (prop, key) => {
        return PropTypes.hasOwnProperty(key) || key.indexOf("data-") === 0 || key.indexOf("aria-") === 0;
    });
}
