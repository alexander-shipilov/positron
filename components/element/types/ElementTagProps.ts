import {
  ReactComponent,
  ReactComponentProps,
  ReactHTMLProps,
  ReactHTMLTag,
  ReactSVGProps,
  ReactSVGTag,
} from "@positron/react-types";
import { HTMLAttributes } from "react";
import { ElementTag } from "./ElementTag";
import { FragmentProps } from "./FragmentProps";

export type ElementTagProps<Tag extends ElementTag> = Tag extends ReactComponent
  ? ReactComponentProps<Tag>
  : Tag extends ReactHTMLTag
  ? ReactHTMLProps<Tag>
  : Tag extends ReactSVGTag
  ? ReactSVGProps<Tag>
  : Tag extends string
  ? HTMLAttributes<HTMLElement>
  : FragmentProps;
