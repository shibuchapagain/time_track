import { Response } from "express";

type SuccessProps = {
  response: {} | any[];
  res: Response;
};

type ErrorProps = {
  err: string;
  code: number;
  res: Response;
};

export const sendSuccessResponse = ({ response, res }: SuccessProps) => {
  return res.status(200).json({
    response,
  });
};

export const sendErrorResponse = ({ err, code, res }: ErrorProps) => {
  return res.status(code || 500).json({
    error: true,
    message: err,
  });
};

export function throwError(code: number, message: string): never {
  const error = message;
  throw error;
}
