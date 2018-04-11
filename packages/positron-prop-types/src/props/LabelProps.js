import PropTypes from "prop-types";
import { PropsOwner } from "../PropsOwner";
import { ElementProps } from "./ElementProps";

export class LabelProps extends PropsOwner {
    static propTypes = {
        ...ElementProps.propTypes,

        form: PropTypes.string,
        htmlFor: PropTypes.string
    };
}
