import { Component } from "/Component";

import "./Spinner.scss";
import { SpinnerPropTypes } from "./SpinnerPropTypes";
import { SpinnerRenderer } from "./SpinnerRenderer";

export class Spinner extends Component {
}

Spinner.initPropTypes(SpinnerPropTypes).initDefaultProps({
    renderer: SpinnerRenderer,
    align: "center",
    size: "medium"
});
