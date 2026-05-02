import { transformUser } from "../src/core/transformer";

describe("Transformer", () => {

  test("should transform user correctly", () => {
    const input = {
      name: " john doe ",
      email: "JOHN@MAIL.COM",
      age: "25",
      phone: "(123) 456",
      active: "yes"
    };

    const result = transformUser(input);

    expect(result.name).toBe("John Doe");
    expect(result.email).toBe("john@mail.com");
    expect(result.age).toBe(25);
    expect(result.phone).toBe("123456");
    expect(result.active).toBe(true);
  });

});