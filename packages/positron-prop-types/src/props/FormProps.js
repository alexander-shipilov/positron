import PropTypes from "prop-types";
import { PropsOwner } from "../PropsOwner";
import { ElementProps } from "./ElementProps";

export class FormProps extends PropsOwner {
    static propTypes = {
        ...ElementProps.propTypes,

        acceptCharset: PropTypes.string,
        action: PropTypes.string,
        autoComplete: PropTypes.bool,
        encType: PropTypes.string,
        method: PropTypes.string,
        noValidate: PropTypes.bool,
        target: PropTypes.string,

        onSubmit: PropTypes.func,
        onReset: PropTypes.func
    };
}
