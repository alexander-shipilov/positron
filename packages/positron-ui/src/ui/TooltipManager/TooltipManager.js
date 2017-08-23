import { Component } from "/Component";

import "./TooltipManager.scss";
import { TooltipManagerPropTypes } from "./TooltipManagerPropTypes";
import { TooltipManagerRenderer } from "./TooltipManagerRenderer";

export class TooltipManager extends Component {
}

TooltipManager.initPropTypes(TooltipManagerPropTypes).initDefaultProps({
    renderer: TooltipManagerRenderer
});
