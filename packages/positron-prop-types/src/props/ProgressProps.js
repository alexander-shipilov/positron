import PropTypes from "prop-types";
import { PropsOwner } from "../PropsOwner";
import { ElementProps } from "./ElementProps";

export class ProgressProps extends PropsOwner {
    static propTypes = {
        ...ElementProps.propTypes,
        max: PropTypes.number,
        value: PropTypes.number
    };
}
