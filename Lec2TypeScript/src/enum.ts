type keyinput = "up"| "down"| "left" | "right";
type keyinput2 = 1|2|3;
function game(keypress:keyinput){
//do something

}
game("up");
// game("random");
//the above is still not human readable so to make it so we use enum
enum keygame{
  up="up",
  down="down",
  left="left",
  right="right"//we can also give string value to enum,numeric value if we give 3 then for the next of the elements it keeps on adding 1,
}
function game2(keypress:keygame){
if(keypress=keygame.up){
  //do something
}
}
game2(keygame.up);
console.log(keygame.up);