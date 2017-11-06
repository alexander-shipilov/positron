import { ComponentRenderer } from "../Component";

export class DropOwnerRenderer extends ComponentRenderer {
    static render(dropOwner) {
        const { children } = dropOwner.props;

        return children;
    }
}
