var moneyElement = document.createElement("div");
moneyElement.id = "money"
document.body.appendChild(moneyElement);

setInterval(function(){

moneyElement.textContent = "$" + world.money;
},10);