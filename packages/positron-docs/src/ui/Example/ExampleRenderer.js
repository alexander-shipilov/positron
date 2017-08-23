import { ComponentRenderer } from "/ui/Component";
import { filterElementProps } from "/ui/Element";
import React from "react";

export class ExampleRenderer extends ComponentRenderer {
    static render(example) {
        return (
            <div { ...filterElementProps(example.props) } className={ example.block() }>
            </div>
        );
    }
}
