import type { ReactSVG } from "react";

import type { ReactDOMTagSVG } from "./ReactDOMTagSVG";

export type ReactDOMFactorySVG<TTag extends ReactDOMTagSVG> = ReactSVG[TTag];
