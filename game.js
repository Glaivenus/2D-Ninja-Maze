
var tileSize = 50;


var map1 = [
  [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
  [1, 0, 0, 1, 0, 0, 0, 0, 0, 1, 1, 0, 1, 1, 0, 0, 0, 0, 0, 1],
  [1, 1, 0, 1, 0, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 1, 1],
  [1, 1, 0, 0, 0, 1, 1, 1, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 1, 1],
  [1, 0, 0, 1, 0, 0, 0, 1, 0, 1, 0, 1, 1, 0, 1, 1, 1, 0, 0, 1],
  [1, 1, 1, 1, 1, 1, 0, 1, 0, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 1],
  [1, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 1, 1, 0, 1, 0, 0, 0, 0, 1],
  [1, 1, 1, 1, 1, 1, 0, 1, 0, 1, 0, 1, 1, 0, 1, 0, 1, 1, 0, 1],
  [1, 1, 1, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 1, 1, 0, 1],
  [1, 0, 0, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 1],
  [1, 1, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 1],
  [1, 0, 0, 0, 1, 0, 1, 1, 1, 1, 1, 1, 0, 1, 0, 0, 0, 0, 0, 1],
  [1, 1, 1, 0, 1, 0, 1, 1, 1, 1, 1, 1, 0, 1, 0, 1, 1, 1, 0, 1],
[1, 0, 1, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 1, 0, 1, 0, 0, 0, 1],
[1, 0, 1, 1, 1, 1, 1, 0, 1, 0, 0, 0, 1, 1, 0, 0, 0, 1, 1, 1],
[1, 0, 0, 0, 0, 0, 1, 0, 1, 0, 1, 1, 1, 0, 0, 1, 1, 1, 0, 1],
[1, 0, 1, 1, 1, 0, 1, 0, 1, 0, 1, 0, 0, 0, 1, 1, 0, 0, 0, 1],
[1, 0, 1, 0, 0, 0, 1, 1, 1, 0, 1, 0, 1, 1, 1, 0, 0, 1, 1, 1],
[1, 0, 1, 1, 1, 1, 1, 0, 0, 0, 1, 0, 1, 1, 1, 1, 0, 0, 0, 1],
[1, 0, 0, 0, 1, 0, 1, 1, 1, 0, 0, 0, 1, 1, 0, 0, 0, 1, 1, 1],
[1, 0, 1, 0, 1, 0, 1, 0, 0, 0, 1, 1, 1, 0, 0, 1, 0, 0, 0, 1],
[1, 0, 1, 0, 1, 0, 1, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 1, 1],
[1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 1],
[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
];

var map2 =[
[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
[1, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 0, 1],
[1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 0, 0, 1],
[1, 0, 1, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 1, 1, 0, 0, 0, 0, 1],
[1, 0, 1, 1, 1, 1, 0, 1, 0, 1, 0, 1, 0, 1, 1, 0, 1, 1, 1, 1],
[1, 0, 1, 0, 0, 0, 0, 1, 0, 1, 0, 1, 0, 1, 1, 0, 0, 0, 0, 1],
[1, 0, 1, 0, 1, 1, 1, 1, 0, 1, 0, 1, 0, 1, 1, 0, 1, 1, 1, 1],
[1, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 1, 0, 1, 1, 0, 0, 0, 0, 1],
[1, 0, 1, 1, 1, 0, 1, 1, 1, 1, 0, 1, 0, 1, 1, 1, 1, 1, 0, 1],
[1, 0, 1, 0, 1, 0, 0, 0, 0, 1, 0, 1, 0, 1, 1, 0, 0, 0, 0, 1],
[1, 0, 1, 0, 1, 1, 1, 1, 0, 1, 0, 1, 0, 1, 1, 0, 1, 1, 1, 1],
[1, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 1, 1],
[1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 0, 1, 0, 1, 1, 0, 0, 0, 0, 1],
[1, 0, 1, 1, 1, 0, 1, 1, 0, 1, 0, 1, 0, 1, 1, 1, 1, 1, 0, 1],
[1, 0, 1, 0, 1, 0, 0, 0, 0, 1, 0, 1, 0, 1, 1, 1, 0, 0, 0, 1],
[1, 0, 1, 0, 1, 1, 1, 1, 1, 1, 0, 1, 0, 1, 1, 1, 0, 1, 1, 1],
[1, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1],
[1, 0, 1, 1, 1, 1, 0, 1, 0, 1, 0, 1, 0, 1, 1, 1, 1, 1, 1, 1],
[1, 0, 0, 0, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 0, 0, 0, 0, 1],
[1, 0, 1, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 1, 1, 0, 1],
[1, 0, 1, 0, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 0, 0, 1],
[1, 0, 1, 0, 1, 1, 0, 1, 0, 1, 0, 1, 0, 1, 1, 1, 0, 1, 1, 1],
[1, 0, 1, 0, 0, 0, 0, 1, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1],
[1, 0, 1, 1, 1, 1, 1, 1, 0, 1, 0, 1, 1, 1, 1, 1, 1, 1, 0, 1],
[1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 1, 0, 0, 1],
[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1],
[1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
]

var maps = [map1, map2];
var maze = maps[Math.floor(Math.random() * 2)];

var numRows = maze.length;
var numCols = maze[0].length;
var playerPos = {x: 1, y: 1, angle: 0};

// map!
var mapElement = document.createElement("div");
mapElement.style.width = numCols * tileSize + "px";
mapElement.style.height = numRows * tileSize + "px";
mapElement.style.marginTop = -numRows * tileSize / 2 + "px";
mapElement.style.marginLeft = -numCols * tileSize / 2 + "px";
for (var i = 0; i < numRows; i++) {
  for (var j = 0; j < numCols; j++) {
    var tileElement = document.createElement("div");
    tileElement.style.width = tileSize + "px";
    tileElement.style.height = tileSize + "px";
    tileElement.style.position = "absolute";
    tileElement.style.top = i * tileSize + "px";
    tileElement.style.left = j * tileSize + "px";
    if (maze[i][j] === 1) {
      tileElement.classList.add("wall");
    } else {
      tileElement.classList.add("floor");
    }
    mapElement.appendChild(tileElement);
  }
}
document.getElementById("game").appendChild(mapElement);

// player!
var playerElement = document.createElement("div");
playerElement.id = "player";
document.getElementById("game").appendChild(playerElement);


function movePlayer(newX, newY, newAngle) {
  var mapContainer = document.getElementById("map-container");
  var player = document.getElementById("player");

  // Check if the new position is valid
  if (maze[Math.floor(newY)][Math.floor(newX)] === 1) {
    return;
  }

  // Move the player to the new position
  player.style.left = newX * tileSize + "px";
  player.style.top = newY * tileSize + "px";
  playerPos.x = newX;
  playerPos.y = newY;
  playerPos.angle = newAngle;

  // Scroll the map so that the player is always in the center of the screen
  var offsetX = (window.innerWidth - tileSize) / 2 - newX * tileSize;
  var offsetY = (window.innerHeight - tileSize) / 2 - newY * tileSize;
  mapContainer.style.transform = "translate(" + offsetX + "px, " + offsetY + "px)";
}






// press buttons to move
document.getElementById("btn-north").addEventListener("click", function() {
  var newX = playerPos.x - Math.sin(playerPos.angle);
  var newY = playerPos.y - Math.cos(playerPos.angle);
  movePlayer(newX, newY, playerPos.angle);
});
document.addEventListener("keydown", function(event) {
  if (event.key === "ArrowUp" || event.key === "w") {
    var newX = playerPos.x - Math.sin(playerPos.angle);
    var newY = playerPos.y - Math.cos(playerPos.angle);
    movePlayer(newX, newY, playerPos.angle);
  }
});



document.getElementById("btn-east").addEventListener("click", function() {
  var newX = playerPos.x - Math.cos(playerPos.angle);
  var newY = playerPos.y - Math.sin(playerPos.angle);
  movePlayer(newX, newY, playerPos.angle);
});
document.addEventListener("keydown", function(event) {
  if (event.key === "ArrowRight" || event.key === "d") {
      var newX = playerPos.x + Math.cos(playerPos.angle + Math.PI / 2);
      var newY = playerPos.y - Math.sin(playerPos.angle + Math.PI / 2);
      movePlayer(newX, newY, playerPos.angle);
  }
});



document.getElementById("btn-south").addEventListener("click", function() {
  var newX = playerPos.x + Math.sin(playerPos.angle);
  var newY = playerPos.y + Math.cos(playerPos.angle);
  movePlayer(newX, newY, playerPos.angle);
});
document.addEventListener("keydown", function(event) {
  if (event.key === "ArrowLeft" || event.key === "a") {
      var newX = playerPos.x + Math.cos(playerPos.angle - Math.PI / 2);
      var newY = playerPos.y - Math.sin(playerPos.angle - Math.PI / 2);
      movePlayer(newX, newY, playerPos.angle);
  }
});


document.getElementById("btn-west").addEventListener("click", function() {
  var newX = playerPos.x + Math.cos(playerPos.angle);
  var newY = playerPos.y + Math.sin(playerPos.angle);
  movePlayer(newX, newY, playerPos.angle);
});
document.addEventListener("keydown", function(event) {
  if (event.key === "ArrowDown" || event.key === "s") {
    var newX = playerPos.x + Math.sin(playerPos.angle);
    var newY = playerPos.y + Math.cos(playerPos.angle);
    movePlayer(newX, newY, playerPos.angle);
  }
});


