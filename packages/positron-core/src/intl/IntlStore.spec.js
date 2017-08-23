import { IntlStore } from "./IntlStore";

describe("IntlStore", () => {
    it("#setMessages", () => {
        const store = new IntlStore();

        store.setMessages({ foo: { "en-US": "foo string" } });
        expect(store.state.messages.valueOf()).toEqual({ foo: { "en-US": "foo string" } });

        store.setMessages({ foo: { "en-US": "foo string" } }, "ted-");
        expect(store.state.messages.valueOf())
            .toEqual({ "foo": { "en-US": "foo string" }, "ted-foo": { "en-US": "foo string" } });
    });
});
