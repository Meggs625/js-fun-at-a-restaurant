function nameMenuItem(foodChoice) {
  return `Delicious ${foodChoice}`;
};

function createMenuItem(menuItemName, price, type) {
  var menuItem = {
    name: menuItemName,
    price: price,
    type: type,
  }
  return menuItem;
};


function addIngredients(firstIngredient, ingredients) {

if ( ingredients.includes(firstIngredient,) === false) {
  ingredients.push(firstIngredient,);
}
  return ingredients;
};


function formatPrice(initialPrice) {
  return `$${initialPrice}`;
};


function decreasePrice(discountedPrice) {
  return discountedPrice - (discountedPrice * 0.1);
};


function createRecipe(title, ingredients, type) {
  var recipe = {
    title: title,
    ingredients: ingredients,
    type: type,
  }

  return recipe;
};

module.exports = {
  nameMenuItem,
  createMenuItem,
  addIngredients,
  formatPrice,
  decreasePrice,
  createRecipe
}
