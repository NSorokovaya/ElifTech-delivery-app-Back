// add-order
const Menu = require("../../models/menu");
const Order = require("../../models/order");

const createOrder = async (req, res) => {
  const { name, email, phone, address } = req.query;
  console.log(req.query);
  if (!name || !email || !address || !phone) {
    res.status(400);
    throw new Error("Please fill all the required fields");
  }
  // adding order
  const dishOrders = await Menu.find({
    shoppingList: { $exists: true, $ne: [] },
  });
  // adding total price
  let totalPrice = 0;
  for (const dishOrder of dishOrders) {
    totalPrice += dishOrder.price;
  }
  const newOrder = await Order.create({
    name,
    email,
    phone,
    address,
  });
  console.log(newOrder);
  res.status(200).json({
    newOrder,
    dishOrders,
    totalPrice,
  });
};
module.exports = createOrder;
