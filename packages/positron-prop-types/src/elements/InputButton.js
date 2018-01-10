import { compact } from "positron-core";
import { PropsOwner } from "../PropsOwner";
import { InputElement } from "./_InputElement";

export class InputButton extends PropsOwner {
    static propTypes = compact(InputElement.propTypes);
}
