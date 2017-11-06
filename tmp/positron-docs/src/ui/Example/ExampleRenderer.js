import { ComponentRenderer } from "positron-ui/src/ui/Component";
import { filterElementProps } from "positron-ui/src/ui/Element";
import React from "react";

export class ExampleRenderer extends ComponentRenderer {
    static render(example) {
        return (
            <div { ...filterElementProps(example.props) } className={ example.block() }>
            </div>
        );
    }
}
