import { compact } from "positron-core";
import PropTypes from "prop-types";
import { PropsOwner } from "../PropsOwner";
import { InputButton } from "./InputButton";

export class InputSubmit extends PropsOwner {
    static propTypes = compact(
        InputButton.propTypes,
        {
            formAction: PropTypes.string,
            formEncType: PropTypes.string,
            formMethod: PropTypes.string,
            formNoValidate: PropTypes.bool,
            formTarget: PropTypes.string
        }
    );
}
