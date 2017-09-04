import { Component } from "../Component";

import "./Accent.scss";
import { AccentPropTypes } from "./AccentPropTypes";
import { AccentRenderer } from "./AccentRenderer";

export class Accent extends Component {
}

Accent.initPropTypes(AccentPropTypes).initDefaultProps({
    renderer: AccentRenderer
});
