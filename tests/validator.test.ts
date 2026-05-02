import { validateUser } from "../src/core/validator";

describe("Validator", () => {

  test("should validate a correct user", () => {
    const user = {
      name: "John Doe",
      email: "john@mail.com",
      age: 30,
      active: true
    };

    expect(validateUser(user)).toEqual(user);
  });

  test("should throw error on invalid email", () => {
    const user = {
      name: "John",
      email: "bad-email",
      age: 30,
      active: true
    };

    expect(() => validateUser(user)).toThrow();
  });

});