import { IntlStore } from "../IntlStore";

describe("IntlStore", () => {
    describe("#setLocale", () => {
        it("sets state locale", () => {
            const store = new IntlStore({ locale: "en-US" });

            expect(store.state.formatNumber(10000)).toBe("10,000");

            store.setLocale("ru-RU");
            expect(store.state.formatNumber(10000)).toBe("10 000");
        });
    });

    describe("#setLocaleMessages", () => {
        it("adds messages", () => {
            const store = new IntlStore();

            store.setLocaleMessages("en-US", { "foo": "foo string" });
            expect(store.state.messages.toJSON()).toEqual({ "en-US": { "foo": "foo string" } });

            store.setLocaleMessages("en-US", { "ted-foo": "ted string" });
            expect(store.state.messages.toJSON())
                .toEqual({ "en-US": { "foo": "foo string", "ted-foo": "ted string" } });
        });
    });

    describe("#setMessages", () => {
        it("adds messages", () => {
            const store = new IntlStore();

            store.setMessages({ "en-US": { "foo": "foo string" } });
            expect(store.state.messages.toJSON()).toEqual({ "en-US": { "foo": "foo string" } });

            store.setMessages({ "en-US": { "ted-foo": "ted string" } });
            expect(store.state.messages.toJSON())
                .toEqual({ "en-US": { "foo": "foo string", "ted-foo": "ted string" } });
        });

        it("passing null should reset all messages", () => {
            const store = new IntlStore();

            store.setMessages(null);
            store.setMessages({ "en-US": { "ted-foo": "ted string" } });
            expect(store.state.messages.toJSON()).toEqual({ "en-US": { "ted-foo": "ted string" } });
        });
    });
});
