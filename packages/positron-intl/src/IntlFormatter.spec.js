import * as core from "positron-core";
import { IntlFormatter } from "./IntlFormatter";

const date = new Date(2016, 11, 30, 13, 14, 15, 1617);

describe("IntlFormatter", () => {
    let warning;

    beforeAll(() => {
        warning = jest.spyOn(core, "warning");
    });

    afterEach(() => {
        warning.mockReset();
    });

    afterAll(() => {
        warning.mockRestore();
    });

    function expectInvalidTypeToWarn(type, handler) {
        handler(new IntlFormatter({ locale: "en-US", formats: { [type]: void 0 } }), "default");

        expect(warning).toHaveBeenCalledTimes(1);
        expect(warning).toHaveBeenLastCalledWith("invalid format type");
    }

    function expectInvalidPresetToWarn(handler) {
        handler(new IntlFormatter({ locale: "en-US" }), "invalid-preset");

        expect(warning).toHaveBeenCalledTimes(1);
        expect(warning).toHaveBeenLastCalledWith("invalid preset");
    }

    describe("#formatDate", () => {
        it("returns formatted date", () => {
            const formatter = new IntlFormatter({ locale: "en-US" });

            expect(formatter.formatDate(date)).toBe("12/30/2016, 1:14 PM");
            expect(formatter.formatDate(date, "long")).toBe("December 30, 2016 at 1:14:16 PM");
        });

        it("should warn if formatter has no `date` formats", () => {
            expectInvalidTypeToWarn("date", (formatter) => formatter.formatDate(date));
        });

        it("should warn if passed invalid preset", () => {
            expectInvalidPresetToWarn((formatter, preset) => formatter.formatDate(date, preset));
        });
    });

    describe("#formatDateToParts", () => {
        it("returns formatted date parts", () => {
            const formatter = new IntlFormatter({ locale: "en-US" });

            expect(formatter.formatDateToParts(date))
                .toEqual({ day: "30", dayPeriod: "PM", hour: "1", minute: "14", month: "12", year: "2016" });
            expect(formatter.formatDateToParts(date, "long"))
                .toEqual({
                    day: "30",
                    dayPeriod: "PM",
                    hour: "1",
                    minute: "14",
                    month: "December",
                    second: "16",
                    year: "2016"
                });
        });

        it("should warn if formatter has no `date` formats", () => {
            expectInvalidTypeToWarn("date", (formatter) => formatter.formatDateToParts(date));
        });

        it("should warn if passed invalid preset", () => {
            expectInvalidPresetToWarn((formatter, preset) => formatter.formatDateToParts(date, preset));
        });
    });

    describe("#formatMessage", () => {
        it("returns formatted string", () => {
            const formatter = new IntlFormatter({
                locale: "en-US",
                messages: {
                    "en-US": {
                        "test-message1": "Hello World",
                        "test-message2": "Goodbye {param} world"
                    }
                }
            });

            expect(formatter.formatMessage("test-message1")).toBe("Hello World");
            expect(formatter.formatMessage("test-message2", { param: "cruel" })).toBe("Goodbye cruel world");
        });

        it("should return a key if string was not found", () => {
            const formatter = new IntlFormatter({ locale: "en-US" }, { "messages": { "en-US": {} } });

            expect(formatter.formatMessage("not-found-message")).toBe("not-found-message");
        });

        it("should warn if there is no messages with specified locale", () => {
            const formatter = new IntlFormatter({ locale: "en-US" });

            formatter.formatMessage("not-found-message");
            expect(warning).toHaveBeenCalled();
        });
    });

    describe("#formatMoney", () => {
        it("returns formatted string", () => {
            expect(new IntlFormatter({ locale: "en-US" }).formatMoney(123.4, "USD")).toBe("$123.40");
            expect(new IntlFormatter({ locale: "fr-FR" }).formatMoney(123.4, "USD")).toBe("123,40\u00A0$US");
        });

        it("should warn if formatter has no `money` formats", () => {
            expectInvalidTypeToWarn("money", (formatter) => formatter.formatMoney(123.4, "USD"));
        });

        it("should warn if passed invalid preset", () => {
            expectInvalidPresetToWarn((formatter, preset) => formatter.formatMoney(123.4, "USD", preset));
        });
    });

    describe("#formatNumber", () => {
        const number = 123456.4;

        it("returns formatted number", () => {
            expect(new IntlFormatter({ locale: "en-US" }).formatNumber(number)).toBe("123,456.4");
        });

        it("should warn if formatter has no `number` formats", () => {
            expectInvalidTypeToWarn("number", (formatter) => formatter.formatNumber(number));
        });

        it("should warn if passed invalid preset", () => {
            expectInvalidPresetToWarn((formatter, preset) => formatter.formatNumber(number, preset));
        });
    });
});
