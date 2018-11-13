import PropTypes from "prop-types";
import { PropsOwner } from "../PropsOwner";

export class FormElementProps extends PropsOwner {
    static propTypes = {
      disabled: PropTypes.bool,
      form: PropTypes.string,
      name: PropTypes.string
    };
}
