import { Store } from "positron-core/src/dataflow";
import { AppMenuModel } from "./AppMenuModel";

export class AppMenuStore extends Store.of(AppMenuModel) {
    toggleExpanded(item) {
        const index = this.state.indexOf(item);

        if (index !== -1) {
            this.setState({ [index]: { expanded: !item.expanded } });
        }
    }
}
