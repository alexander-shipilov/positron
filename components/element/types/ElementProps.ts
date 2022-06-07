import { Optional } from "@positron/utility-types";
import { Ref } from "react";
import { ElementTag } from "./ElementTag";
import { ElementTagProps } from "./ElementTagProps";
import { ElementTarget } from "./ElementTarget";

export type ElementProps<
  Tag extends ElementTag,
  Props extends ElementTagProps<Tag> = ElementTagProps<Tag>,
  Target = ElementTarget<Tag>
> = Props & {
  Element?: Tag;
  elementRef?: Optional<Ref<Target>>;
};
