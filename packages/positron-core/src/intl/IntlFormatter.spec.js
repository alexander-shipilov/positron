import { IntlFormatter } from "./IntlFormatter";

describe("IntlFormatter", () => {
    describe("#formatDate", () => {
        it("returns formatted date", () => {
            const intl = new IntlFormatter({ locale: "fr-FR" });

            expect(intl.formatDate(new Date(2016, 11, 30))).toBe("30/12/2016");
            expect(intl.formatDate(new Date(2016, 11, 30), "long")).toBe("30 décembre 2016");
        });
    });

    describe("#formatMoney", () => {
        it("returns formatted string", () => {
            const intl = new IntlFormatter({ locale: "fr-FR" });

            expect(intl.formatMoney(123.4, "USD")).toBe("123,40\u00A0$US");
        });
    });

    describe("#formatMessage", () => {
        it("returns formatted string", () => {
            const intl = new IntlFormatter({
                locale: "en-US",
                messages: {
                    "test-message1": { "en-US": "Hello World" },
                    "test-message2": { "en-US": "Goodbye {param} world" }
                }
            });

            expect(intl.formatMessage("test-message1")).toBe("Hello World");
            expect(intl.formatMessage("test-message2", { param: "cruel" })).toBe("Goodbye cruel world");
        });

        it("should return a key if string was not found", () => {
            const intl = new IntlFormatter({ locale: "en-US" });

            expect(intl.formatMessage("not-found-message")).toBe("not-found-message");
        });
    });
});
