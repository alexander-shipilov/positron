import { PropsOwner } from "../PropsOwner";
import { ImageElementProps } from "./ImageElementProps";
import { InputElementProps } from "./InputElementProps";

export class InputImageProps extends PropsOwner {
    static propTypes = {
      ...InputElementProps.propTypes,
      ...ImageElementProps.propTypes
    };
}
