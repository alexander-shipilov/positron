import PropTypes from "prop-types";
import { PropsOwner } from "../PropsOwner";
import { ElementProps } from "./ElementProps";
import { TableCellProps } from "./TableCellProps";

export class TableHeaderCellProps extends PropsOwner {
    static propTypes = {
      ...ElementProps.propTypes,
      ...TableCellProps.propTypes,

      scope: PropTypes.string
    };
}
