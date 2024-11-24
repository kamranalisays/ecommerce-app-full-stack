import orderService from "../services/OrderService.js";

const submitOrder = async (req, res) => {
  return await orderService.submitOrder(req, res);
};

const getAllOrders = async (req, res) => {
  return await orderService.getAllOrders(req, res);
};

export default { submitOrder, getAllOrders };
