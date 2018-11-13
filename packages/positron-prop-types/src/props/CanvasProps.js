import { PropsOwner } from "../PropsOwner";
import { ElementProps } from "./ElementProps";
import { SizableElementProps } from "./SizableElementProps";

export class CanvasProps extends PropsOwner {
    static propTypes = {
      ...ElementProps.propTypes,
      ...SizableElementProps.propTypes
    };
}
