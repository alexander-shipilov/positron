import PropTypes from "prop-types";
import { PropsOwner } from "../PropsOwner";
import { InputButtonProps } from "./InputButtonProps";

export class InputSubmitProps extends PropsOwner {
    static propTypes = {
        ...InputButtonProps.propTypes,

        formAction: PropTypes.string,
        formEncType: PropTypes.string,
        formMethod: PropTypes.string,
        formNoValidate: PropTypes.bool,
        formTarget: PropTypes.string
    };
}
