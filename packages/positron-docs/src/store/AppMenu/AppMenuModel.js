import { InvariableObject, TypedInvariableArray } from "positron-core/src/invariable";
import { toKebabCase } from "positron-core/src/string";

export class AppMenuEntry extends InvariableObject {
    get expandable() {
        return this.entries !== void 0 && this.entries.length > 0;
    }

    get ref() {
        return this.href || toKebabCase(this.title);
    }

    constructor(...data) {
        super({ title: "", icon: "", href: "", expanded: true }, ...data);
    }
}

export class AppMenuEntries extends TypedInvariableArray.of(AppMenuEntry) {
}

AppMenuEntry.defineInvariableProperties({
    entries: AppMenuEntries
});

export class AppMenuModel extends AppMenuEntries {
}
