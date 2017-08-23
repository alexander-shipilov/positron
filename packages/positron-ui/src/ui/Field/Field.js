import { Component } from "/Component";

import "./Field.scss";
import { FieldPropTypes } from "./FieldPropTypes";
import { FieldRenderer } from "./FieldRenderer";

export class Field extends Component {
}

Field.initPropTypes(FieldPropTypes).initDefaultProps({
    renderer: FieldRenderer
});
