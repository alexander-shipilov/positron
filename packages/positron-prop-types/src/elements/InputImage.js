import { compact } from "positron-core";

import { PropsOwner } from "../PropsOwner";
import { ImageElement } from "./_ImageElement";
import { InputElement } from "./_InputElement";

export class InputImage extends PropsOwner {
    static propTypes = compact(
        InputElement.propTypes,
        ImageElement.propTypes
    );
}
