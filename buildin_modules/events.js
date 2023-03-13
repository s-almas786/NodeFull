const PizzaShop = require("./pizza-shop");
const DrinkMachine = require("./drink-machine");

// const EventEmitter = require("events");

// const emitter = new EventEmitter();

// emitter.on("order pizza", (size, topping) =>
//   console.log(`Order Received! Baking a ${size} pizza with ${topping} topping.`)
// );

// emitter.on("order pizza", (size) => {
//   if (size == "medium") {
//     console.log("Serving Complementry Drinks");
//   }
// });
// emitter.emit("order pizza", "medium", "pepperoni");

const pizzaShop = new PizzaShop();
const drinkMachine = new DrinkMachine();

pizzaShop.on("order pizza", (size, topping) => {
  console.log(`Order Received! Baking a ${size} pizza with ${topping} topping`);
  drinkMachine.serveDrink(size);
});

pizzaShop.order("medium", "pepperoni");
pizzaShop.displayOrderNo();
