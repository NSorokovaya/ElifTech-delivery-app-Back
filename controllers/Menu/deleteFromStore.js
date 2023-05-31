const Menu = require("../../models/menu");

const deleteFromStore = async (req, res) => {
  const { menuId } = req.query;

  const updateMenu = await Menu.findOneAndUpdate(
    { shoppingList: { $in: [menuId] } },
    { $pull: { shoppingList: menuId } },
    { new: true }
  );
  if (!menuId) {
    res.json({
      message: "This dish was not found",
    });
  }
  res.status(200).json({
    code: 200,
    message: "Dish is deleted from shopping list",
    data: updateMenu.shoppingList,
  });
};

module.exports = deleteFromStore;
