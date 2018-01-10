import { compact } from "positron-core";
import PropTypes from "prop-types";
import { InputText } from "./InputText";
import { PropsOwner } from "./PropsOwner";

export class InputNumber extends PropsOwner {
    static propTypes = compact(
        InputText.propTypes,
        {
            max: PropTypes.number,
            min: PropTypes.number,
            step: PropTypes.number
        }
    );
}
