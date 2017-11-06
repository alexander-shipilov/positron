import { InvariableObject } from "positron-core/src/invariable";

export class AppPage extends InvariableObject {
    constructor(...data) {
        super({ title: "", content: "" }, ...data);
    }
}
