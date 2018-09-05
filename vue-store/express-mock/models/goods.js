var mongoose = require('mongoose')
var Schema = mongoose.Schema
var prodectSchema = new Schema({
  'productId': String,
  'productName': String,
  'salePrice': Number,
  'productImage': String
})
module.exports = mongoose.model('Good', prodectSchema)
