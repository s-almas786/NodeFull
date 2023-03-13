const EventEmitter = require("node:events");

class PizzaShop extends EventEmitter {
  constructor() {
    super();
    this.noOfOrders = 0;
  }
  order(size, topping) {
    this.noOfOrders++;
    this.emit("order pizza", size, topping);
  }
  displayOrderNo() {
    console.log(`Current order number: ${this.noOfOrders}`);
  }
}

module.exports = PizzaShop;
