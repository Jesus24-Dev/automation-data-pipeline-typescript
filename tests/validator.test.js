"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const validator_1 = require("../src/core/validator");
describe("Validator", () => {
    test("should validate a correct user", () => {
        const user = {
            name: "John Doe",
            email: "john@mail.com",
            age: 30,
            active: true
        };
        expect((0, validator_1.validateUser)(user)).toEqual(user);
    });
    test("should throw error on invalid email", () => {
        const user = {
            name: "John",
            email: "bad-email",
            age: 30,
            active: true
        };
        expect(() => (0, validator_1.validateUser)(user)).toThrow();
    });
});
//# sourceMappingURL=validator.test.js.map