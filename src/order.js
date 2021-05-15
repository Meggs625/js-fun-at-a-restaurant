function takeOrder(order, deliveryOrders) {

  if (deliveryOrders.length < 3) {
      deliveryOrders.push(order);
  };
};

function refundOrder(needRefund, deliveryOrders) {
  for (var i = 0; i < deliveryOrders.length; i++) {
    if (deliveryOrders[i].orderNumber === needRefund) {
      deliveryOrders.splice([i], 1)
    };
  };
};

function listItems(deliveryOrders) {
  var orderItems = [];

  for (var i = 0; i < deliveryOrders.length; i++) {
    orderItems.push(deliveryOrders[i].item)
  };
  return orderItems.join(', ');
};

function searchOrder(deliveryOrders, itemQuery) {
  for (var i = 0; i < deliveryOrders.length; i++) {
    if (deliveryOrders[i].item === itemQuery) {
      return true;
    };
  };
      return false;
};


module.exports = {
  takeOrder,
  refundOrder,
  listItems,
  searchOrder
}
