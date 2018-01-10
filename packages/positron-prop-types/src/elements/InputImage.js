import { compact } from "positron-core";
import { ImageElement } from "./_ImageElement";
import { InputElement } from "./_InputElement";

import { PropsOwner } from "./PropsOwner";

export class InputImage extends PropsOwner {
    static propTypes = compact(
        InputElement.propTypes,
        ImageElement.propTypes
    );
}
