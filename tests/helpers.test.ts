import { cleanEmail, parseBoolean, cleanPhone } from "../src/utils/helpers";

describe("Helpers", () => {

  test("should normalize email", () => {
    expect(cleanEmail(" TEST@MAIL.COM ")).toBe("test@mail.com");
  });

  test("should parse boolean correctly", () => {
    expect(parseBoolean("YES")).toBe(true);
    expect(parseBoolean("true")).toBe(true);
    expect(parseBoolean("false")).toBe(false);
  });

  test("should clean phone", () => {
    expect(cleanPhone("(+1) 555-123")).toBe("1555123");
  });

});