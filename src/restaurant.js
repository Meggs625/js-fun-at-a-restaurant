function createRestaurant(name, menus) {
  var restaurant = {
    name: name,
    menus: {
      breakfast: [],
      lunch: [],
      dinner: [],
    },
  };
    return restaurant;
};


function addMenuItem(name, menuItem) {
  if (menuItem.type === 'breakfast' && name.menus.breakfast.includes(menuItem) !== true) {
    name.menus.breakfast.push(menuItem);
  } else if (menuItem.type === 'lunch' && name.menus.lunch.includes(menuItem) !== true) {
    name.menus.lunch.push(menuItem);
  } else if (menuItem.type === 'dinner' && name.menus.dinner.includes(menuItem) !== true) {
    name.menus.dinner.push(menuItem);
  }
};

  function removeMenuItem(name, menuItem, mealMenu) {
    for (var i = 0; i < name.menus[mealMenu].length; i++) {
      if (name.menus[mealMenu][i].name === menuItem) {
        name.menus[mealMenu].splice(name.menus[mealMenu].indexOf(menuItem), 1);

        return `No one is eating our ${menuItem} - it has been removed from the ${mealMenu} menu!`;
      }
    }
        return `Sorry, we don't sell ${menuItem}, try adding a new recipe!`;

    };





module.exports = {
  createRestaurant,
  addMenuItem,
  removeMenuItem
}
