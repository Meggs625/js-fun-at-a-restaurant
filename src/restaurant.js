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



//     if (mealMenu === 'breakfast' && name.menus.breakfast.name === menuItem) {
//       name.menus.breakfast.splice(name.menus.breakfast.indexOf(menuItem))
//
//     return `No one is eating our ${menuItem} - it has been removed from the ${mealMenu} menu!`;
//
//   } else {
//     return `Sorry, we don't sell ${mealItem}, try adding a new recipe!`;
//   }
//     if (mealMenu === 'lunch' && name.menus.lunch.name === menuItem ) {
//     name.menus.lunch.splice(name.menus.lunch.indexOf(menuItem))
//
//     return `No one is eating our ${menuItem} - it has been removed from the ${mealMenu} menu!`;
//
//   } else {
//
//     return `Sorry, we don't sell ${mealItem}, try adding a new recipe!`;
//   }
//
//     if (mealMenu === 'dinner' && name.menus.dinner.name === menuItem) {
//     name.menus.dinner.splice(name.menus.dinner.indexOf(menuItem))
//
//     return `No one is eating our ${menuItem} - it has been removed from the ${mealMenu} menu!`;
//   } else {
//     return `No one is eating our ${menuItem} - it has been removed from the ${mealMenu} menu!`;
//   }
// };
// Failed Recent Code
// function removeMenuItem(name, menuItem, mealMenu) {
//   if (mealMenu === 'breakfast') {
//     for (var i = 0; i < name.menus.breakfast; i++) {
//       if (name.menus.breakfast[i].name === menuItem){
//         name.menus.breakfast.splice(i, 1);
//         return `No one is eating our ${menuItem} - it has been removed from the ${mealMenu} menu!`;
//         }
//       }
//     }
//
//   } else if (mealMenu === 'lunch' && name.menus.lunch.name === menuItem) {
//     for (var i = 0; i < name.menus.lunch; i++) {
//       if (name.menus.lunch[i].name === menuItem){
//         name.menus.lunch.splice(i, 1);
//         return `No one is eating our ${menuItem} - it has been removed from the ${mealMenu} menu!`;
//       }
//     }
//
//   } else if (mealMenu === 'dinner' && name.menus.dinner.name === menuItem) {
//     for (var i = 0; i < name.menus.dinner; i++) {
//       if (name.menus.dinner[i].name === menuItem){
//         name.menus.dinner.splice(i, 1);
//         return `No one is eating our ${menuItem} - it has been removed from the ${mealMenu} menu!`;
//       }
//     }
//   }
// };
// console.log(createRestaurant('Sexy Pizza').menus.lunch);

// Failied code

// function removeMenuItem(name, menuItem, mealMenu) {
//   if (mealMenu === 'breakfast' && name.menus.breakfast.name === menuItem) {
//     var deleteBreakfastItem = name.menus.breakfast.indexOf(mealItem);
//     name.menus.breakfast.splice(deleteBreakfastItem, 1);
//
//   } else if (mealMenu === 'lunch' && name.menus.lunch.name === menuItem) {
//     var deleteLunchItem = name.menus.lunch.indexOf(menuItem);
//     name.menus.lunch.splice(deleteLunchItem, 1)
//
//   } else if (mealMenu === 'dinner' && name.menus.dinner.name === menuItem) {
//     var deleteDinnerItem = name.menu.dinner.indexOf(menuItem);
//     name.menus.dinner.splice(deleteDinnerItem, 1)
//   }
//   return `No one is eating our ${menuItem} - it has been removed from the ${mealMenu} menu!`
// };
// function removeMenuItem(name, menuItem, mealMenu) {
//   if (mealMenu === 'breakfast' && name.menus.breakfast.includes(menuItem) === true) {
//     var deleteBreakfastItem = name.menus.breakfast.name.indexOf(menuItem);
//     name.menus.breakfast.splice(deleteBreakfastItem, 1);
//
//   } else if (mealMenu === 'lunch' && name.menus.lunch.includes(menuItem) === true) {
//     var deleteLunchItem = name.menus.lunch.name.indexOf(menuItem);
//     name.menus.lunch.splice(deleteLunchItem, 1)
//
//   } else if (mealMenu === 'dinner' && name.menus.dinner.includes(menuItem) === true) {
//     var deleteDinnerItem = name.menu.dinner.name.indexOf(menuItem);
//     name.menus.dinner.splice(deleteDinnerItem, 1)
//   }
//   return `No one is eating our ${menuItm} - it has been removed from the ${mealMenu} menu!`
// };


module.exports = {
  createRestaurant,
  addMenuItem,
  removeMenuItem
}
