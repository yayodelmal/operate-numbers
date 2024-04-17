import { operateNumbers } from "../operations";
import { OperationRequest } from "../interface";

describe("operateNumbers function", () => {
  test("should return the sum of two numbers", () => {
    const request: OperationRequest = {
      operation: "sum",
      num1: 5,
      num2: 3,
    };
    const result = operateNumbers(request);
    expect(result.result).toBe(8);
  });

  test("should return the subtraction of two numbers", () => {
    const request: OperationRequest = {
      operation: "subtract",
      num1: 10,
      num2: 3,
    };
    const result = operateNumbers(request);
    expect(result.result).toBe(7);
  });

  test("should return the multiplication of two numbers", () => {
    const request: OperationRequest = {
      operation: "multiply",
      num1: 4,
      num2: 2,
    };
    const result = operateNumbers(request);
    expect(result.result).toBe(8);
  });

  test("should throw an error for invalid operation", () => {
    const request: OperationRequest = {
      operation: "divide",
      num1: 10,
      num2: 2,
    };
    expect(() => operateNumbers(request)).toThrow(
      "Invalid operation. Please choose either sum, subtract, or multiply.",
    );
  });


});
