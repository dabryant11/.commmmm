let employees = ["darien", "Jeffery", "steve", "Sarah", "julie", "sam"];

function randomGrouping(employees) {
  return Math.floor(Math.random() * employees);
}

console.log(randomGrouping(employees));
