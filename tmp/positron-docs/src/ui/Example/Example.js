import { Component } from "positron-ui/src/ui/Component";

import "./Example.scss";
import { ExamplePropTypes } from "./ExamplePropTypes";
import { ExampleRenderer } from "./ExampleRenderer";

export class Example extends Component {
}

Example.initPropTypes(ExamplePropTypes).initDefaultProps({
    renderer: ExampleRenderer
});
