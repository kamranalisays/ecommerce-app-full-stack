import CONSTANTS from "../utils/constants.js";

const apiResponse = (res, statusCode, operationStatus, message) => {
  return res.status(statusCode).send({
    [CONSTANTS.success]: operationStatus,
    [CONSTANTS.message]: message,
  });
};

export default apiResponse;
