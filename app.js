const itemsList = document.getElementById("items");

for (var item in itemsList) {
  itemsList[item].className = "item";
}
