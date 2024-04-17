import { OperationRequest, OperationResponse } from "./interface";

function add(num1: number, num2: number): number {
  return num1 + num2;
}

function subtract(num1: number, num2: number): number {
  return num1 - num2;
}

function multiply(num1: number, num2: number): number {
  return num1 * num2;
}

function divide(num1: number, num2: number): number {
  if (num2 === 0) {
    throw new Error("Cannot divide by zero");
  }
  return num1 / num2;
}

export function operateNumbers(request: OperationRequest): OperationResponse {
  const { operation, num1, num2 } = request;

  switch (operation) {
    case "sum":
      return { result: add(num1, num2) };
    case "subtract":
      return { result: subtract(num1, num2) };
    case "multiply":
      return { result: multiply(num1, num2) };
    case "divide":
      try {
        return { result: divide(num1, num2) };
      } catch (error) {
        throw new Error((error as Error).message);
      }
    default:
      throw new Error("Invalid operation");
  }
}
