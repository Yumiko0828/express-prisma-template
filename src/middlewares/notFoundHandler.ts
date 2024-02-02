import { Handler } from "express";

export const notFoundHandler: Handler = (req, res) => {
  res.status(404).json({
    error: "Not Found",
  });
};
