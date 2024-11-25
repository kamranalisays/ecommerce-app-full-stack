import productService from "../services/ProductService.js";

const getAllOrders = async (req, res) => {
  try {
    const result = await productService.getAllOrders(req, res);
    return result;
  } catch (error) {
    return res.status(Codes.INTERNAL_SERVER_ERROR_500).send({
      [CONSTANTS.success]: false,
      [CONSTANTS.message]: messages.INTERNAL_SERVER_ERROR_GET_ALL_PRODUCTS,
      [CONSTANTS.errorMessage]: error.message,
      [CONSTANTS.errorStack]: error.stack,
    });
  }
};

export default { submitOrder, getAllOrders };
