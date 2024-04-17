import { Request, Response } from "express";
import { operateNumbers } from "./operations";
import { OperationRequest } from "./interface";

export function handleOperations(req: Request, res: Response): void {
  try {
    const request: OperationRequest = req.body;
    const result = operateNumbers(request);
    res.json({ result });
  } catch (error) {
    res.status(400).json({ error: (error as Error).message });
  }
}
