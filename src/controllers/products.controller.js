import Product from '../models/Product'

export const createProducts = async (req, res) => {
  const { name, category, price, imageURL } = req.body
  const newProduct = new Product({
    name,
    category,
    price,
    imageURL,
  })
  const productSave = await newProduct.save()
  res.status(201).json(productSave)
}
export const getProducts = async (req, res) => {
  const products = await Product.find()
  res.json(products)
}
export const getProductById = async (req, res) => {
  const product = await Product.findById(req.params.id)
  res.json(product)
}
export const updateProductById = async (req, res) => {
  const updatedProduct = await Product.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true }
  )
  res.status(200).json(updatedProduct)
}
export const deleteProductById = async (req, res) => {
  const { id } = req.params
  await Product.findByIdAndDelete(id)
  res.status(204).json()
}
