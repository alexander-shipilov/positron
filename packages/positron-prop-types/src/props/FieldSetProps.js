import { PropsOwner } from "../PropsOwner";
import { ElementProps } from "./ElementProps";
import { FormElementProps } from "./FormElementProps";

export class FieldSetProps extends PropsOwner {
    static propTypes = {
        ...ElementProps.propTypes,
        ...FormElementProps.propTypes
    };
}
