const Menu = require("../../models/menu");

const getAllMenu = async (req, res) => {
  const result = await Menu.find();

  if (!result) {
    res.status(400);
    throw new Error("Bad Request");
  }
  res.status(200).json({
    message: "success",
    data: result,
  });
};

module.exports = getAllMenu;
