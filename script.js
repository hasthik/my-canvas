const grid = document.getElementById('grid');
const ctx = grid.getContext('2d');
const gridSize = 5;
const gridWidth = 1000;
const gridHeight = 1000;

grid.width = gridWidth;
grid.height = gridHeight;


ctx.fillStyle = "white";
var colour = "black";
ctx.stroke();
function getColour() {
    colour = event.target.className
   console.log(colour);
}
grid.addEventListener("mousemove", function(event) {
    var x = event.clientX - grid.offsetLeft;
    var y = event.clientY - grid.offsetTop;
    var gridX = Math.floor(x / gridSize);
    var gridY = Math.floor(y / gridSize);
    ctx.fillStyle = colour;
    ctx.fillRect(gridX * gridSize, gridY * gridSize, gridSize, gridSize);
});
