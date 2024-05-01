import { describe, test, it, expect } from "vitest";
import { fizzBuzz, max } from "../intro";

// describe("max", () => {
//   it("should return the first argument if it is greater", () => {
//     // Arrange
//     const a = 2,
//       b = 1;

//     //Act
//     const result = max(a, b);

//     // Assert
//     expect(result).toBe(2);
//   });
// });

describe("max", () => {
  it("should return the first argument if it is greater", () => {
    expect(max(2, 1)).toBe(2);
  });

  it("should return the second argument if it is greater", () => {
    expect(max(1, 2)).toBe(2);
  });

  it("should return the first argument if there is equal", () => {
    expect(max(1, 1)).toBe(1);
  });
});

describe("fizzBuzz", () => {
  it("should return FizzBuzz if the argument divisible by 3 and 5", () => {
    expect(fizzBuzz(15)).toBe("FizzBuzz");
  });

  it("should return Fizz if the argument divisible by 3", () => {
    expect(fizzBuzz(9)).toBe("Fizz");
  });

  it("should return Buzz if the argument divisible by 5", () => {
    expect(fizzBuzz(10)).toBe("Buzz");
  });

  it("should return the argument string if it's not divisible by 3 or 5", () => {
    expect(fizzBuzz(11)).toBe("11");
  });
});
