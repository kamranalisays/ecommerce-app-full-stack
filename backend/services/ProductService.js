import product from "../models/Product.js";
import Codes from "../utils/Codes.js";
import CONSTANTS from "../utils/constants.js";
import messages from "../utils/messages.js";

const getAllProducts = async (req, res) => {
  try {
    const products = await product.find({});
    return res.status(Codes.OK_200).send({
      [CONSTANTS.success]: true,
      [CONSTANTS.message]: messages.SUCCESSFUL,
      [CONSTANTS.data]: products,
    });
  } catch (error) {
    return res.status(Codes.INTERNAL_SERVER_ERROR_500).send({
      [CONSTANTS.success]: false,
      [CONSTANTS.message]: messages.INTERNAL_SERVER_ERROR_GET_ALL_PRODUCTS,
      [CONSTANTS.errorMessage]: error.message,
      [CONSTANTS.errorStack]: error.stack,
    });
  }
};

export default { getAllProducts };
