"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const helpers_1 = require("../src/utils/helpers");
describe("Helpers", () => {
    test("should normalize email", () => {
        expect((0, helpers_1.cleanEmail)(" TEST@MAIL.COM ")).toBe("test@mail.com");
    });
    test("should parse boolean correctly", () => {
        expect((0, helpers_1.parseBoolean)("YES")).toBe(true);
        expect((0, helpers_1.parseBoolean)("true")).toBe(true);
        expect((0, helpers_1.parseBoolean)("false")).toBe(false);
    });
    test("should clean phone", () => {
        expect((0, helpers_1.cleanPhone)("(+1) 555-123")).toBe("1555123");
    });
});
//# sourceMappingURL=helpers.test.js.map