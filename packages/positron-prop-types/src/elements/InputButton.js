import { compact } from "positron-core";
import { InputElement } from "./_InputElement";
import { PropsOwner } from "./PropsOwner";

export class InputButton extends PropsOwner {
    static propTypes = compact(InputElement.propTypes);
}
