// /get-store
const Menu = require("../../models/menu");

const getStoreList = async (req, res) => {
  const results = await Menu.find({
    shoppingList: { $exists: true, $ne: [] },
  });

  let totalPrice = 0;
  for (const result of results) {
    totalPrice += result.price;
  }

  res.json({
    status: 200,
    message: "success",
    data: results,
    totalPrice,
  });
};

module.exports = getStoreList;
