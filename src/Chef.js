class Chef {
  constructor(name, restaurant) {
    this.name = name;
    this.restaurant = restaurant;
    this.foodItem = [];
  }
  greetCustomer(customerName, morning) {
    if (morning === true){
      return `Good morning, ${customerName}!`
    }
    return `Hello, ${customerName}!`
  }

  addMenuItem(restaurant, foodItem) {
    this.foodItem.push(foodItem);
  }

  checkForFood(foodItem) {
    if (foodItem === this.foodItem) {
      return `Yes, we're serving ${foodItem} today!`
    }
  }
}

module.exports = Chef;
