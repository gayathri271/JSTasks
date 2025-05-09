function SecretGame() {
  console.log("Welcome to the Secret Number Game");

//   let num = 6;
  let num=Math.floor(Math.random()*10)
  const GuessNumber = () => {
    console.log(num);
    
    for (i = 0; i < 3; i++) {
      let x = +prompt("Enter a number between 1-10:");
      if (x == num) {
        alert("The number is you guessed is correct");
        return;
      } else if(x==num+1 || x==num+2 || x==num-1 || x==num-2){
        alert("The number is you guessed is near by");
      }
      else if (x < num) {
        alert("The number you guessed is too low!");
      } else {
        alert("The number you guessed is too High!");
      }
    }
 
  }
  return GuessNumber
}
const Game = SecretGame();
Game()





  
