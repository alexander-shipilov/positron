import {
  ReactComponent,
  ReactHTMLTag,
  ReactSVGTag,
} from "@positron/react-types";
import { FragmentTag } from "./FragmentTag";

export type ElementTag =
  | ReactComponent
  | ReactHTMLTag
  | ReactSVGTag
  | FragmentTag
  | string;
