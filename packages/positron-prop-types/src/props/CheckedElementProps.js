import PropTypes from "prop-types";
import { PropsOwner } from "../PropsOwner";

export class CheckedElementProps extends PropsOwner {
    static propTypes = {
      checked: PropTypes.bool
    };
}
