import { OperationRequest, OperationResponse } from "./interface";

export function operateNumbers(request: OperationRequest): OperationResponse {
  const { operation, num1, num2 } = request;

  switch (operation) {
    case "sum":
      return { result: num1 + num2 };
    case "subtract":
      return { result: num1 - num2 };
    case "multiply":
      return { result: num1 * num2 };
    default:
      throw new Error(
        "Invalid operation. Please choose either sum, subtract, or multiply.",
      );
  }
}
