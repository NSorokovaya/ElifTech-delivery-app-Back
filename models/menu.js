const { Schema, model } = require("mongoose");

const MenuSchema = new Schema(
  {
    title: {
      type: String,
      required: [true, "Set title "],
    },
    category: {
      type: String,
      required: [true, "Set category for recipe"],
    },
    thumb: {
      type: String,
      // required: [true, "Set image for recipe"],
    },
    price: {
      type: Number,
      required: true,
      min: 0.01,
    },
    shoppingList: {
      type: Array,
      default: [],
    },
  },
  { versionKey: false, timestamps: true }
);

const Menu = model("menu", MenuSchema);

module.exports = Menu;
