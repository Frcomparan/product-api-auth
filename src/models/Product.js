import { Schema, model } from 'mongoose'

const productSchema = new Schema(
  {
    name: String,
    categoty: String,
    price: Number,
    imgURL: String,
  },
  {
    timestamps: true,
    versionKey: false,
  }
)

export default model('Product', productSchema)
