import PropTypes from "prop-types";
import { PropsOwner } from "../PropsOwner";

export class RequiredElementProps extends PropsOwner {
    static propTypes = {
      required: PropTypes.bool
    };
}
