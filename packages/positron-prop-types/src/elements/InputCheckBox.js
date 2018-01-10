import { compact } from "positron-core";
import { CheckedElement } from "./_CheckedElement";
import { InputElement } from "./_InputElement";
import { PropsOwner } from "./PropsOwner";

export class InputCheckBox extends PropsOwner {
    static propTypes = compact(
        InputElement.propTypes,
        CheckedElement.propTypes
    );
}
