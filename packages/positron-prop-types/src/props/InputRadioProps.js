import { PropsOwner } from "../PropsOwner";
import { CheckedElementProps } from "./CheckedElementProps";
import { InputElementProps } from "./InputElementProps";
import { RequiredElementProps } from "./RequiredElementProps";

export class InputRadioProps extends PropsOwner {
    static propTypes = {
        ...InputElementProps.propTypes,
        ...CheckedElementProps.propTypes,
        ...RequiredElementProps.propTypes
    };
}
