import { classnames } from "positron-core/src/dom";
import { forEach } from "positron-core/src/object";
import { toKebabCase } from "positron-core/src/string";

function getModifiers(className, modifiers) {
    const classNames = [];

    forEach(modifiers, (value, modifier) => {
        if (modifier && value) {
            modifier = "_" + toKebabCase(modifier);

            if (value !== true) {
                modifier += "_" + toKebabCase(String(value));
            }

            classNames.push(className + modifier);
        }
    });

    return classNames;
}

export class BemClassifier {
    static get className() {
        return toKebabCase(this.name);
    }

    get className() {
        return this.constructor.className;
    }

    static bem(className, modifiers = null, ...other) {
        return classnames(className, this.modifiers(className, modifiers), ...other);
    }

    static block(modifiers = null, ...other) {
        return this.bem(this.className, modifiers, ...other);
    }

    static element(name, modifiers = null, ...other) {
        return this.bem(this.className + "__" + name, modifiers, ...other);
    }

    static modifiers(className, modifiers = null) {
        return modifiers && classnames(...getModifiers(className, modifiers));
    }

    bem(...args) {
        return this.constructor.bem(...args);
    }

    block(...args) {
        return this.constructor.block(...args);
    }

    element(...args) {
        return this.constructor.element(...args);
    }

    modifiers(className, modifiers) {
        return this.constructor.modifiers(className, modifiers);
    }
}
