import { cleanedUsers } from "../src/core/pipeline"

describe("Pipeline", () => {

  test("should process valid and invalid users correctly", () => {
    const input = [
      {
        name: " John ",
        email: "JOHN@MAIL.COM",
        age: "30",
        active: "yes"
      },
      {
        name: null,
        email: "bad-email",
        age: "unknown",
        active: "no"
      }
    ];

    const result = cleanedUsers(input);

    expect(result.success.length).toBe(1);
    expect(result.errors.length).toBe(1);
  });

});