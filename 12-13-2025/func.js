function getOrder(input) {
  let food = {"burger" : "Burger ","fries":"Fries ","chicken":"Chicken ", "pizza": "Pizza ", "sandwich":"Sandwich ",
             "onionrings":"Onionrings ","milkshake":"Milkshake ", "coke":"Coke "}
  let priority = ["Burger", "Fries", "Chicken", "Pizza", "Sandwich", "Onionrings", "Milkshake", "Coke"]
  for (const [key, value] of Object.entries(food)) {
    input = input.replaceAll(key,value)
  }
  return input.trim().split(" ").sort((a,b)=>priority.indexOf(a)-priority.indexOf(b)).join(" ")
}

// Description:
// Some new cashiers started to work at your restaurant.

// They are good at taking orders, but they don't know how to capitalize words, or use a space bar!

// All the orders they create look something like this:

// "milkshakepizzachickenfriescokeburgerpizzasandwichmilkshakepizza"

// The kitchen staff are threatening to quit, because of how difficult it is to read the orders.

// Their preference is to get the orders as a nice clean string with spaces and capitals like so:

// "Burger Fries Chicken Pizza Pizza Pizza Sandwich Milkshake Milkshake Coke"

// The kitchen staff expect the items to be in the same order as they appear in the menu.

// The menu items are fairly simple, there is no overlap in the names of the items:

// 1. Burger
// 2. Fries
// 3. Chicken
// 4. Pizza
// 5. Sandwich
// 6. Onionrings
// 7. Milkshake
// 8. Coke