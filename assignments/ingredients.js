const ingredients = ["eggs", "milk", "flour", "sugar", "baking soda", "baking powder", "chocolate chips", "bananas"];

// Write a while loop that prints out the contents of ingredients:
let iterate = 0;
while (iterate < ingredients.length) {
  console.log(ingredients[iterate]);
  iterate += 1;
}
// Write a for loop that prints out the contents of ingredients:
for (let item of ingredients) {
  console.log(item);
}
// Write any loop (while or for) that prints out the contents of ingredients backwards:
for (let i = ingredients.length - 1; i > 0; i--) {
  console.log(ingredients[i]);
}