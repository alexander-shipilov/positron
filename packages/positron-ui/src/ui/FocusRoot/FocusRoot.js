import { Component } from "/Component";
import { TAB } from "positron-core/src/constants/key-codes";

import "./FocusRoot.scss";
import { FocusRootPropTypes } from "./FocusRootPropTypes";
import { FocusRootRenderer } from "./FocusRootRenderer";

const SELECTOR = "a input select textarea button".split(" ")
    .map((tagName) => tagName + ":not([disabled]):not([tabindex='-1'])").join(",");

function getPosition(target, all) {
    let index = -1;

    all.some((el, i) => {
        const isBefore = (target.compareDocumentPosition(el) & 2) === 2;

        if (isBefore) {
            index = i;
        }

        return !isBefore;
    });

    return index + 1;
}

function getElement(elements, forward) {
    return elements[forward ? 0 : elements.length - 1];
}

function getIndex(tabIndex, index, length) {
    return tabIndex * length + index;
}

function findNext(root, target, forward) {
    const all = Array.from(root.querySelectorAll(SELECTOR));
    const length = all.length;
    const targetIndex = getIndex(Math.max(+target.tabIndex || 0, 0), getPosition(target, all), length);
    const elements = [];

    all.forEach((el, index) => {
        const tabIndex = +el.tabIndex || 0;

        if (el !== target) {
            index = getIndex(tabIndex, index, length);

            if (index < targetIndex) {
                index += length * length;
            }

            elements[index] = el;
        }
    });

    return getElement(elements.filter((el) => el), forward);
}

export class FocusRoot extends Component {
    onKeyDown = (event) => {
        if (event.keyCode === TAB) {
            const next = findNext(this.refs.root, event.target, !event.shiftKey);

            if (next) {
                event.stopPropagation();
                event.preventDefault();
                next.focus();
            }
        }
    };

    componentDidMount() {
        const { autoFocus } = this.props;

        if (autoFocus) {
            setTimeout(() => {
                const input = this.refs.root.querySelector(SELECTOR);

                if (input) {
                    input.focus();
                }
            }, 200);
        }
    }
}

FocusRoot.initPropTypes(FocusRootPropTypes).initDefaultProps({
    renderer: FocusRootRenderer
});
