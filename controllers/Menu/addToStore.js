// //add-dish
const Menu = require("../../models/menu");

const addToStore = async (req, res) => {
  const { menuId } = req.query;

  const dish = await Menu.findById(menuId);
  if (!dish) {
    return res.status(404).json({
      message: "Dish is not found",
    });
  }

  dish.shoppingList.push(menuId);
  await dish.save();

  res.status(200).json({
    message: "Dish is added to favorites",
    data: dish.shoppingList,
  });
};
module.exports = addToStore;
