var mongoose = require('mongoose')
var prodectSchema = mongoose.Schema({
  productId: String,
  productName: String,
  salePrice: Number,
  productImage: String
})
module.exports = mongoose.model('Good', prodectSchema)
