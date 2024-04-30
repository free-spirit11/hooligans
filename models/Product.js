import { Schema, model, models } from 'mongoose';

const ProductSchema = new Schema(
  {
    brand: {
      type: String,
      required: true,
    },
    model: {
      type: String,
      required: true,
    },
    type: {
      type: String,
      required: true,
    },
    sku: {
      type: String,
      required: true,
    },
    gender: {
      type: String,
      required: true,
    },
    price: {
      type: String,
      required: true,
    },
    color: {
      type: String,
    },
    sale: {
      type: Boolean,
      default: false,
    },
    inWishlist: {
      type: Boolean,
      default: false,
    },
    images: [
      {
        type: String,
      },
    ],
    description: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

const Product = models.Product || model('Product', ProductSchema);

export default Product;
