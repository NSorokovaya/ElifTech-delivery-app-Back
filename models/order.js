const { Schema, model } = require("mongoose");
// const emailRegexp = /^\w+([-]?\w+)*@\w+([-]?\w+)*(\.\w{2,3})+$/;
// const phoneRegExp =
//   /^\+?.\(?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}$/;

const orderSchema = new Schema(
  {
    name: {
      type: String,
      required: [true, "Set name for user"],
    },
    email: {
      type: String,
      // match: emailRegexp,
      required: [true, "Email is required"],
      unique: true,
    },
    phone: {
      type: String,
      // match: phoneRegExp,
      required: [true, " Phone is required"],
    },
    address: {
      type: String,
      required: [true, " Address is required"],
    },
  },

  {
    versionKey: false,
    timestamps: true,
  }
);

const Order = model("order", orderSchema);

module.exports = Order;
