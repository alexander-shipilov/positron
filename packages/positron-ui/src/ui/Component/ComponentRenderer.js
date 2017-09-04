export class ComponentRenderer {
    static ref(component, ref) {
        return (el) => {
            component[ref] = el;
        };
    }

    static block(component, modifiers) {

    }

    static element(component, name, modifiers) {

    }

    static modifiers

    static render(component) {
        throw component.getError("renderer#render: Should be implemented");
    }
}
