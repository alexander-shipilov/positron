import { ImmutableObject } from "positron-immutable";
import { ScrollBarModel } from "./ScrollBarModel";
import { ORIENTATION_HORIZONTAL, ORIENTATION_VERTICAL } from "./utils";

export class ScrollAreaModel extends ImmutableObject {
}

ScrollAreaModel.of({
    [ORIENTATION_HORIZONTAL]: ScrollBarModel,
    [ORIENTATION_VERTICAL]: ScrollBarModel
});
