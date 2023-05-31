// menu/:category
const Menu = require("../../models/menu");

const getMenuByCategory = async (req, res) => {
  const { category } = req.params;

  const result = await Menu.find({ category: `${category}` });

  res.json({
    status: 200,
    message: "success",
    data: result,
  });
};
module.exports = getMenuByCategory;
