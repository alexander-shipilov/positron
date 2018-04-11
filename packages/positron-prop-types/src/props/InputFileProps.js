import PropTypes from "prop-types";
import { PropsOwner } from "../PropsOwner";
import { InputElementProps } from "./InputElementProps";
import { RequiredElementProps } from "./RequiredElementProps";

export class InputFileProps extends PropsOwner {
    static propTypes = {
        ...InputElementProps.propTypes,
        ...RequiredElementProps.propTypes,

        accept: PropTypes.string,
        capture: PropTypes.bool,
        multiple: PropTypes.bool
    };
}
