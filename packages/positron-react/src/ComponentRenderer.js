import { block, element, modifiers } from "positron-dom";

export class ComponentRenderer {
    static ref(component, ref) {
        return (el) => {
            component[ref] = el;
        };
    }

    static block(component, mods = null, ...other) {
        return block(component.constructor.name, mods, component.props.className, ...other);
    }

    static element(component, name, mods = null, ...other) {
        return element(component.constructor.name, name, mods, ...other);
    }

    static modifiers(component, mods) {
        return modifiers(component.constructor.name, mods);
    }

    static render(component) {
        throw component.getError("renderer#render: Should be implemented");
    }
}
