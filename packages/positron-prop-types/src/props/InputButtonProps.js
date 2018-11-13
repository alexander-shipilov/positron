import { PropsOwner } from "../PropsOwner";
import { InputElementProps } from "./InputElementProps";

export class InputButtonProps extends PropsOwner {
    static propTypes = {
      ...InputElementProps.propTypes
    };
}
