import orderService from "../services/OrderService.js";

const submitOrder = async (req, res) => {
  try {
    const result = await orderService.submitOrder(req, res);
    return result;
  } catch (error) {
    apiResponse(
      res,
      Codes.INTERNAL_SERVER_ERROR_500,
      false,
      Messages.INTERNAL_SERVER_ERROR_USER_REGISTERATION,
      error.message,
      error.stack
    );
  }
};

const getAllOrders = async (req, res) => {
  try {
    const result = await orderService.getAllOrders(req, res);
    return result;
  } catch (error) {
    apiResponse(
      res,
      Codes.INTERNAL_SERVER_ERROR_500,
      false,
      Messages.INTERNAL_SERVER_ERROR_USER_REGISTERATION,
      error.message,
      error.stack
    );
  }
};

export default { submitOrder, getAllOrders };
