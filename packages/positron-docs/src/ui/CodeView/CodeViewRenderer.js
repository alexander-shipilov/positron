import { ComponentRenderer } from "../Component";
import { filterElementProps } from "../Element";
import React from "react";

export class CodeViewRenderer extends ComponentRenderer {
    static render(codeView) {
        return (
            <div { ...filterElementProps(codeView.props) } className={ codeView.block() }>
            </div>
        );
    }
}
