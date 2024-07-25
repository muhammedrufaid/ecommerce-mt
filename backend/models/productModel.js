const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const variantSchema = new Schema({
  color: {
    type: String,
    required: true,
  },
  stock: {
    type: Number,
    required: true,
  },
});

const productSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    variants: [variantSchema],
    user: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Product", productSchema);
