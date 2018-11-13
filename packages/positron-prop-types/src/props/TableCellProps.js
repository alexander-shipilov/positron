import PropTypes from "prop-types";
import { PropsOwner } from "../PropsOwner";
import { ElementProps } from "./ElementProps";

export class TableCellProps extends PropsOwner {
    static propTypes = {
      ...ElementProps.propTypes,

      colSpan: PropTypes.number,
      headers: PropTypes.string,
      rowSpan: PropTypes.number
    };
}
