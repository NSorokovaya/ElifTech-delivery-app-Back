// /get-store
const Menu = require("../../models/menu");

const getStoreList = async (req, res) => {
  const result = await Menu.find({
    shoppingList: { $exists: true, $ne: [] },
  });
  console.log(result);
  res.json({
    status: 200,
    message: "success",
    data: result,
  });
};

module.exports = getStoreList;
