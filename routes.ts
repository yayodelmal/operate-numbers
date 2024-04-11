import { Request, Response } from "express";
import { operateNumbers } from "./operations";
import { OperationRequest, OperationResponse } from "./interface";

export function handleOperations(req: Request, res: Response): void {
  const { operation, num1, num2 } = req.body;

  if (!operation || !num1 || !num2) {
    res.status(400).json({ error: "Missing parameters" });
    return;
  }

  const parsedNum1 = parseFloat(num1 as string);
  const parsedNum2 = parseFloat(num2 as string);

  if (isNaN(parsedNum1) || isNaN(parsedNum2)) {
    res
      .status(400)
      .json({ error: "Invalid parameters. Please provide valid numbers." });
    return;
  }

  const operationRequest: OperationRequest = {
    operation: operation as string,
    num1: parsedNum1,
    num2: parsedNum2,
  };

  try {
    const result: OperationResponse = operateNumbers(operationRequest);
    res.json(result);
  } catch (error) {
    res.status(400).json({ error: (error as Error).message });
  }
}
