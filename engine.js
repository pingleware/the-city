var world = {};
world.money = 5000;
world.min = {x:0,  y:0 };
world.max = {x:10, y:10};
window.json = false;
 var load = new XMLHttpRequest();
 load.onload = function(e) {
  window.json = JSON.parse( load.responseText );
 };
 load.open("get","object.db",true);
 load.send();

world.node = document.createElement('div');
world.node.id = "world";
document.body.appendChild(world.node);

(function(){
 var row;
 var cell;
 var img;
 var click;
 var x  = world.min.x - 1;
 var y  = world.min.y - 1;
 var xl = world.max.x;
 var yl = world.max.y;
 
 while(++x < xl){
  row = document.createElement('div');
  row.classList.add('row');
  world.node.appendChild(row);
  world[x] = {};
  
  y = world.min.y - 1;
  while(++y < yl){
   cell = document.createElement('div');
   cell.classList.add('cell');
   row.appendChild(cell);
   
   world[x][y] = cell;
   
   img = document.createElement('img');
   img.src = "img/grass.png";
   img.level = 0;
   cell.appendChild(img);
   
   click = document.createElement('div');
   click.classList.add('click');
   cell.appendChild(click);
   
   click.addEventListener('click',function(e){
    var img = e.target.parentElement.children[0];
    switch(img.level){
     case 0:
      if(world.money>=10){
       img.src = "img/house.png";
       img.level++;
       world.money=world.money-10;
      }
      break;
     case 1:
      if(world.money>=20){
       img.src = "img/block.png";
       img.level++;
       world.money=world.money-20;
      }
      break;
     case 2:
      if(world.money>=30){
       img.src = "img/skyscraper.png";
       img.level++
       world.money=world.money-30;
      }
      break;
    }
   });
  }
 }
})();
