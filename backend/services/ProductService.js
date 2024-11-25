import product from "../models/Product.js";

const getAllProducts = async (req, res) => {
  try {
    const result = await product.find({});
  } catch (error) {
    return res.status(Codes.INTERNAL_SERVER_ERROR_500).send({
      [CONSTANTS.success]: false,
      [CONSTANTS.message]: messages.INTERNAL_SERVER_ERROR_GET_ALL_ORDERS,
      [CONSTANTS.errorMessage]: error.message,
      [CONSTANTS.errorStack]: error.stack,
    });
  }
};

export default { getAllProducts };
