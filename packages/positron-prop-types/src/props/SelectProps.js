import PropTypes from "prop-types";
import { PropsOwner } from "../PropsOwner";
import { InputElementProps } from "./InputElementProps";
import { RequiredElementProps } from "./RequiredElementProps";

export class SelectProps extends PropsOwner {
    static propTypes = {
        ...InputElementProps.propTypes,
        ...RequiredElementProps.propTypes,

        multiple: PropTypes.bool,
        size: PropTypes.number
    };
}
