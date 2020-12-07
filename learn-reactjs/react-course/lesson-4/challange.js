// challange
function getMilk(money, costPerBottle) {
  console.log("leave house");
  console.log("move right");
  console.log("move right");
  console.log("move up");
  console.log("move up");
  console.log("move up");
  console.log("move right");
  console.log("move right");
  console.log("buy " + calcBottles(money, costPerBottle) + " bottles of milk");
  console.log("move left");
  console.log("move left");
  console.log("move down");
  console.log("move down");
  console.log("move down");
  console.log("move down");
  console.log("move left");
  console.log("move left");
  console.log("enter house");
  return calcChange(money, costPerBottle);
}
// we can calculate bootles.
function calcBottles(startingMoney, costPerBottle) {
  var numberOfBottles = Math.floor(startingMoney / costPerBottle);
  return numberOfBottles;
}
function calcChange(startingAmount, costPerBottle) {
  var change = startingAmount % costPerBottle;
  return change;
}
console.log("Hello master, here is your " + getMilk(10, 3) + " change.");