export class ComponentRenderer {
    static ref(component, ref) {
        return (el) => {
            component[ref] = el;
        };
    }

    static render(component) {
        throw component.getError("renderer#render: Should be implemented");
    }
}
