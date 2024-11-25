import orderService from "../services/OrderService.js";
import Codes from "../utils/Codes.js";
import CONSTANTS from "../utils/constants.js";
import messages from "../utils/messages.js";

const submitOrder = async (req, res) => {
  try {
    const result = await orderService.submitOrder(req, res);
    return result;
  } catch (error) {
    return res.status(Codes.INTERNAL_SERVER_ERROR_500).send({
      [CONSTANTS.success]: false,
      [CONSTANTS.message]: messages.INTERNAL_SERVER_ERROR_ORDER_SUBMIT,
      [CONSTANTS.errorMessage]: error.message,
      [CONSTANTS.errorStack]: error.stack,
    });
  }
};

const getAllOrders = async (req, res) => {
  try {
    const result = await orderService.getAllOrders(req, res);
    return result;
  } catch (error) {
    return res.status(Codes.INTERNAL_SERVER_ERROR_500).send({
      [CONSTANTS.success]: false,
      [CONSTANTS.message]: messages.INTERNAL_SERVER_ERROR_GET_ALL_ORDERS,
      [CONSTANTS.errorMessage]: error.message,
      [CONSTANTS.errorStack]: error.stack,
    });
  }
};

export default { submitOrder, getAllOrders };
