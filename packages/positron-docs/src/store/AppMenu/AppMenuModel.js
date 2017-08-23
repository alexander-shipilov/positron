import { InvariableObject, TypedInvariableArray } from "positron-core/invariable";
import { toKebabCase } from "positron-core/string";

export class AppMenuEntry extends InvariableObject {
    get ref() {
        return this.href || toKebabCase(this.title);
    }

    get expandable() {
        return this.entries !== void 0 && this.entries.length > 0;
    }

    init(...data) {
        super.init({ title: "", icon: "", href: "", expanded: true }, ...data);
    }
}

export class AppMenuEntries extends TypedInvariableArray.of(AppMenuEntry) {
}

AppMenuEntry.defineInvariableProperties({
    entries: AppMenuEntries
});

export class AppMenuModel extends AppMenuEntries {
}
