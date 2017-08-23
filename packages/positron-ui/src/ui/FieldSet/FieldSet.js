import { Component } from "/Component";

import "./FieldSet.scss";
import { FieldSetPropTypes } from "./FieldSetPropTypes";
import { FieldSetRenderer } from "./FieldSetRenderer";

export class FieldSet extends Component {
}

FieldSet.initPropTypes(FieldSetPropTypes).initDefaultProps({
    renderer: FieldSetRenderer
});
