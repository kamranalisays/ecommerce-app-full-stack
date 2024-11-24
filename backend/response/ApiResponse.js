import CONSTANTS from "../utils/constants.js";

export const apiResponse = (
  res,
  statusCode,
  operationStatus,
  message,
  errorMessage,
  errorStack
) => {
  const response = {
    [CONSTANTS.success]: operationStatus,
    [CONSTANTS.message]: message,
    [CONSTANTS.errorMessage]: errorMessage,
    [CONSTANTS.errorStack]: errorStack,
  };

  return res.status(statusCode).send({ response });
};
