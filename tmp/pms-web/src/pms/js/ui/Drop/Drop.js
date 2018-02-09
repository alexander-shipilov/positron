import { arrayToObject, compact } from "positron-core";
import { alignTo, block, Bounds, parseAligns, Rect } from "positron-dom";
import React from "react";
import { Component } from "ui/Component";
import { Portal } from "ui/Portal";

function applyStyles(element, ...styles) {
    Object.assign(element.style, ...styles);
}

export class Drop extends Component {
    static propTypes = compact(
        Portal.propTypes
    );

    static defaultProps = {};

    portal = null;

    applyAligns(to, align) {
        const { container, element } = this.portal;
        const area = new Bounds({ left: 0, top: 0, right: 0, bottom: 0 });
        const auto = Rect.from().toStyle();

        container.className = "drop-container";
        applyStyles(container, { visibility: "hidden" });
        applyStyles(element, auto);

        return parseAligns(align).map((align) => {
            const style = area.constrain(alignTo(container, to, align)).toStyle();

            applyStyles(container, auto, style);

            return {
                style: compact(auto, style),
                className: block("drop-container", Object.assign({ aligned: true }, align)),
                rect: Rect.fromElement(element, container)
            };
        });
    }

    alignTo(to, align) {
        const aligns = this.applyAligns(to, align);
        const propsBySquare = arrayToObject(aligns, (v) => v, ({ rect }) => rect.width * rect.height || 0);
        const props = propsBySquare[Math.max(...Object.keys(propsBySquare))];

        if (props) {
            const { container, element } = this.portal;
            const { width, height } = props.rect.toStyle();

            container.className = props.className;
            applyStyles(container, props.style, { visibility: "visible" });
            applyStyles(element, { width, height });
        }
    }

    render() {
        const { children } = this.props;

        return (
            <Portal ref={ this.ref("portal") } { ...Portal.filterProps(this.props) }
                className={ this.block({ arrow: true }) }>
                <div className={ this.element("content") }>
                    { children }
                </div>
            </Portal>
        );
    }
}
