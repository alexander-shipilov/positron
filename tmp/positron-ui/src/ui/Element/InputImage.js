import { createPropsFilter } from "positron-core/src/prop-types";
import { ImageElementPropTypes } from "./_ImageElement";
import { InputPropTypes } from "./Input";

export const InputImagePropTypes = Object.assign({}, InputPropTypes, ImageElementPropTypes);

export const filterInputImageProps = createPropsFilter(InputImagePropTypes);
