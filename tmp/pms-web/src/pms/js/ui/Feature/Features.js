import React, { Children, cloneElement } from "react";
import { Component } from "ui/Component";
import { Section } from "ui/Section";

export class Features extends Component {
    static get name() {
        return "Features";
    }

    renderChildren() {
        const children = [];

        Children.forEach(this.props.children, (child, key) => {
            if (key !== 0) {
                children.push(<br key={ "br-" + key } className="xs-50 sm-100" />);
            }

            children.push(cloneElement(child, { key }));
        });

        return children;
    }

    render() {
        return (
            <Section { ...this.props }>
                { this.renderChildren() }
            </Section>
        );
    }
}
