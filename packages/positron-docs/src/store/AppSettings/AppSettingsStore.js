import { Store } from "positron-core/src/dataflow";
import { AppSettingsModel } from "./AppSettingsModel";

export class AppSettingsStore extends Store.of(AppSettingsModel) {
    setAccent(accent) {
        this.setState({ accent });
    }

    setExpanded(expanded) {
        this.setState({ expanded });
    }
}
