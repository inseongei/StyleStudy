/**
 * Let`s make a game
 */

const position = { x: 0, y: 0 };
type pos = "up" | "down" | "left" | "right";
function move(pos: pos) {
  if (pos === "up") position.y++;
  if (pos === "down") position.y--;
  if (pos === "left") position.x--;
  if (pos === "right") position.x++;

  return position;
}

console.log(position); // { x : 0 , y : 0}
move("up");
console.log(position); // { x : 0 , y : 1}
move("down");
console.log(position); // { x : 0 , y : 0}
move("left");
console.log(position); // { x : -1 , y : 0}
move("right");
console.log(position); // { x : 0 , y : 0}
