import Order from "../models/Order.js";
import Codes from "../utils/Codes.js";
import CONSTANTS from "../utils/constants.js";
import messages from "../utils/messages.js";

const submitOrder = async (req, res) => {
  try {
    return res.status(Codes.OK_200).send({
      [CONSTANTS.success]: true,
      [CONSTANTS.message]: messages.SUCCESSFUL,
    });
  } catch (error) {
    return res.status(Codes.INTERNAL_SERVER_ERROR_500).send({
      [CONSTANTS.success]: false,
      [CONSTANTS.message]: messages.INTERNAL_SERVER_ERROR_SUBMIT_ORDER,
      [CONSTANTS.errorMessage]: error.message,
      [CONSTANTS.errorStack]: error.stack,
    });
  }
};

const getAllOrders = async (req, res) => {
  try {
    const orders = await Order.find({});

    return res.status(Codes.OK_200).send({
      [CONSTANTS.success]: true,
      [CONSTANTS.message]: messages.SUCCESSFUL,
      [CONSTANTS.data]: orders,
    });
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
