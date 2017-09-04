import { ACCENT_COLORS } from "positron-core/src/constants/accents";
import { InvariableObject } from "positron-core/src/invariable";

export class AppSettingsModel extends InvariableObject {
    get accent() {
        return this._accent;
    }

    set accent(accent) {
        if (accent !== null && accent !== void 0 && !ACCENT_COLORS.hasOwnProperty(accent)) {
            throw this.getError("Invalid value");
        }

        this.define({ _accent: accent || void 0 });
    }

    constructor(...data) {
        super({ accent: "light-blue", expanded: false }, ...data);
    }

    valueOf() {
        return Object.assign(super.valueOf(), this.pick("accent"));
    }
}
