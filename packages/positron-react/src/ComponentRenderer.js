// @flow

import type { Component as ReactComponent } from "react";
import type { Component } from "./Component";

export class ComponentRenderer {
    static ref(component: Component, name: string): HTMLElement | ReactComponent {
        return component.ref(name);
    }

    static block(component: Component, mods: Object = null, ...other: string[]): string {
        return component.block(mods = null, ...other);
    }

    static element(component: Component, name: string, mods: Object = null, ...other): string {
        return component.element(name, mods, ...other);
    }

    static modifiers(component: Component, mods: Object): string {
        return component.modifiers(mods);
    }

    static render(component) {
        throw component.getError("renderer#render: Should be implemented");
    }
}
