var mongoose = require('mongoose');
var PancakeSchema = new mongoose.Schema({
  Name: String,
  IngredientList: String,
  Preparations: String,
  CookingInstructions: String,
  Rating: Number
});

module.exports = mongoose.model('Pancakes', PancakeSchema);
