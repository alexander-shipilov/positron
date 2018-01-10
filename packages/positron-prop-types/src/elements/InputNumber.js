import { compact } from "positron-core";
import PropTypes from "prop-types";
import { PropsOwner } from "../PropsOwner";
import { InputText } from "./InputText";

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
