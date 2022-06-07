import { ReactSVG } from "react";
import { ReactSVGTag } from "./ReactSVGTag";

export type ReactSVGFactory<Tag extends ReactSVGTag> = ReactSVG[Tag];
