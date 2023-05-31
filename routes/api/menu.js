const express = require("express");
const ctrlMenu = require("../../controllers/Menu");

const { ctrlWrapper } = require("../../helpers");

const menuRouter = express.Router();

menuRouter.get("/cafe-list", ctrlWrapper(ctrlMenu.getCafesList));

menuRouter.post("/create-order", ctrlWrapper(ctrlMenu.createOrder));

menuRouter.get("/all", ctrlWrapper(ctrlMenu.getAllMenu));

menuRouter.get("/get-store", ctrlWrapper(ctrlMenu.getStoreList));

menuRouter.get("/:category", ctrlWrapper(ctrlMenu.getMenuByCategory));

menuRouter.post("/add-dish", ctrlWrapper(ctrlMenu.addToStore));

menuRouter.delete("/remove-dish", ctrlWrapper(ctrlMenu.deleteFromStore));

module.exports = menuRouter;
