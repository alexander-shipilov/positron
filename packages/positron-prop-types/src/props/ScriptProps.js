import PropTypes from "prop-types";
import { PropsOwner } from "../PropsOwner";
import { ElementProps } from "./ElementProps";

export class ScriptProps extends PropsOwner {
    static propTypes = {
      ...ElementProps.propTypes,

      async: PropTypes.bool,
      crossOrigin: PropTypes.string,
      defer: PropTypes.bool,
      integrity: PropTypes.string,
      src: PropTypes.string,
      type: PropTypes.string
    };
}
