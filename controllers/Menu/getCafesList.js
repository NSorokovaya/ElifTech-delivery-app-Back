const cafeList = require("../../data/cafeList");

const getCafesList = async (req, res) => {
  const filteredList = cafeList.sort((a, b) => a.localeCompare(b));
  res.json({
    status: 200,
    message: "success",
    categories: filteredList,
  });
};

module.exports = getCafesList;
