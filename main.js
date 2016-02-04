// JavaScript Looping Exercise

// 1. Output each item in the following Array to your console:
var livingRoom = ['couch', 'lamp', 'rug', 'shelf'];
for(i=0; i<livingRoom.length; i++) {   
    console.log(livingRoom[i]);
} 
// 2. Using a loop, log numbers 22-33 in the console.
for(i=22; i<=33; i++) {
	console.log([i]);
}
//[22]
//[23]
//[24]
//[25]
//[26]
//[27]
//[28]
//[29]
//[30]
//[31]
//[32]
//[33]
var counter = 22;
 
while (counter < 34) {  // condition
  console.log(counter)         // statement
  counter++;
}
//22
//23
//24
//25
//26
//27
//28
//29
//30
//31
//32
//33
//33
console.log(counter);
//34


// 3. Using a similar loop, log numbers 75 to 100, only in increments of five.

for(i=75; i<101; i+=5) {   
    console.log(i);
} 

//or while:
var number = 75;
while (number <101) {
   number+=5;
  console.log(number); 
};
// 4. Write a while loop that logs "This is how a professional loops." to the console 5 times.
//     Use this as an example:
//        var counter = 0;
//        var num = 2;

//        while (num < 1000) {
//        num += num;
//        counter++;
//        }

//        console.log(counter);

 var counter = 0;
 
	while (counter <5){
 	console.log("This is how a professional loops.");
 	counter++;
 };

// 5. Write a conditional statement to find the largest number in the array provided.
var largestNum = [-5, -2, -6, 0, -1]
var massive = largestNum[0];

for(i=0; i<largestNum.length; i++) {
	if(largestNum[i] > massive)
		{massive = largestNum[i];}
}
console.log(massive);
//0

// 6. Separately, use both a for loop and while loop to do the same thing.
//     Print out the sentence "At home, I have _____ cats." Use the number from your counter to fill in the number.
//     The numbers should range from 10 to 100, in increments of 25.
//for loop:
for(i=10; i<=100; i+=25) {
  console.log("At home I have " +[i]+ " cats.");
}

//while loop:
var number = 10;
 
while (number <100) {
   number+=25;
  console.log("At home I have " +number+ " cats."); 
};

// 7. Given the following Array, console log 'Even' if the number is even, 'Even and greater than 10' if the
//    number is even and greater than 10, and 'Odd' if the number is odd.
//    HINT: Google 'remainder operator'

var numArray = [2, 17, 9, 24, 8];

for (i=0; i<numArray.length; i++){
     var logical = numArray[i];
    if((logical%2 ==0) && (logical>10)){
    console.log('even and greater than 10');
   
}else if((logical%2)==0){
  console.log('even');
 }
 else{
  console.log('odd');
  }
}
//even
//odd
//even and greater than 10
//even

// 8. Given the following Array, create variable primeArray with the value [2, 7, 17, 29, 41, 53, 67, 79, 97]
var primes = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97,];
//its starting at position:0 value:2,
var primeArray = [];
//1.for loop to grab all the primes
//2.taking value of primes and choose to push those into empty array of prime array

//for (starting point, where it endsl how it should increment);
console.log(primes.length);

// i = postion of the prime array
for (i=0; i<primes.length; i++){
  //console.log("position outside of if, primes position: "+i);
  //console.log("primes value: "+primes[i]);
  // if the positon of the primes array remainder of 3 === 0
  if(i%3 === 0) {
    //console.log("position of value: "+i);
    //console.log("value inside array: "+primes[i]);
    // push the value of i into the prime array
    primeArray.push(primes[i]);
  }
  console.log("finished array: "+primeArray);
  }

// 9. Prompt a user to pick either a number or a word. Create a script that alerts the user whether they chose a number or a word.
// Hint: 'NaNN'
var userInput= prompt("Enter a number or a word.");  
console.log(typeof(userInput));                                   

    if(isNaN(userInput) === false){
    console.log("You entered the number " + userInput);
  }
    else{
      console.log("You entered the word " +userInput);
    };
   
// 10. Write a loop that outputs the following to the console:
// #
// ##
// ###
// ####
// #####
// ######
// #######
//1.looping a triange up to 7:
var triangle = ' ';

for(i=0; i<7; i++){
  triangle = triangle + '#';
  console.log(triangle);
};

var count= 0;
var pound = ' ';

while(count <8){
  console.log(pound)
  pound = pound + '#'
  count++
}

// RO SHAM BO!
// We're going to create a paper, rock, scissors game that prompts you for yovur choice and allows the computer to
// randomly choose. You will use an alert to define the winner.

// 11. Use a variable called "human" to prompt the user to type their choice.
var human = prompt("rock, paper or scissors?");
// 12. Define an array called "choices" that consists of "paper", "rock", and "scissors".
var choices = ["rock", "paper", "scissors?"];
// 13. Define a variable called "computer" and use Math.random to allow the computer to randomly select a number.
//    For reference:
//    Math.random gives you a random number between 0 and 1, which is different each time you call it.
var computer = Math.random();
// 14. Let's start our conditional statement. Start by reassigning the computer variable to "rock" if the random number
//    falls between 0 and .33. Run the code until the console prints out "rock" instead of the number.
//    In English, it will look like this:
//      var computer = my Math.random code here
//       if the number is between 0 and 33
//          computer = "rock"
//       log computer to the console
if(0 < computer && computer <= 0.33){
    computer = choices[0];}
    //conole.log(computer);
// 15. Now add the following conditionals to the same statement:
//    If the random number is between .34 and .66, set the computer variable to "paper".
//    If the random number is between .67 and 1, set the computer variable to "scissors". (Who the hell seriously chooses scissors first?)
else if(.33 < computer && computer <= 0.66){
    computer = choices[1];}
    //console.log(computer);

 else if(.66 < computer && computer < 1){
    computer = choices[2];}
    console.log("computer choice: " +computer); 
    console.log("Human choice: " +human)  
// 16. Using both "human", begin another conditional statement. At this time, leave the statements blank.

//    In English, it will look like this:
//      if human is "rock"
//        leave this blank
//      if human is "paper"
//        leave this blank
//      else
//        leave this blank
if(human === "rock")
else if(human === "paper")
else if(human === "scissors")  
// 17. Now inside of each condition, we need to compare the "human" variable to the "computer" variable,
//    then print to the console who won the game.
if(human === "rock"){
  if (computer === "rock"){
    console.log("tie!");
  }else if (computer === "paper"){
        console.log("computer wins!");
    }else {
      console.log("user wins!");
    }
  } 
  else if(human === "paper"){
    if(computer === "paper"){
      console.log("tie!");
    } else if (computer === "rock"){
      console.log("user wins!");
    }else {
      console.log("computer wins!");
    }
  }
  else if(human === "scissors"){
    if(computer === "scissors"){
      console.log("tie!");
    }else if (computer === "rock"){
      console.log("computer wins!");
    }else {
      console.log("user wins!");
    }
  }
// 18. Give yourself a high five for completing your first javascript game!
var human = prompt("rock, paper or scissors?");
var choices = ["rock", "paper", "scissors"];
var computer = Math.random();
console.log(computer)

if(0 < computer && computer <= .33){
    computer = choices[0];

  }else if(.33 < computer && computer <= .66){
    computer = choices[1];
  } else if(.66 < computer && computer < 1){
    computer = choices[2];
  }
  if(human === "rock"){
  if (computer === "rock"){
    console.log("tie!");
  }else if (computer === "paper"){
        console.log("computer wins!");
    }else {
      console.log("user wins!");
    }
  }
   else if(human === "paper"){
    if(computer === "paper"){
      console.log("tie!");
    } else if (computer === "rock"){
      console.log("user wins!");
    }else {
      console.log("computer wins!");
    }
  }
  else if(human === "scissors"){
    if(computer === "scissors"){
      console.log("tie!");
    }else if (computer === "rock"){
      console.log("computer wins!");
    }else {
      console.log("user wins!");
    }
  }
  else{
  human = prompt("Please choose either rock, paper or scissors");
}
    console.log("computer choice: " +computer); 
    console.log("Human choice: " +human); 
// 19. Use the game you made above and rework it using a switch statement.
var human = prompt("rock, paper or scissors?");
var choices = ["rock", "paper", "scissors"];
var computer = Math.random();
console.log(computer)

switch(computer) {
  case (computer < .33):
    computer = choices[0]
    break;
  case (computer > .66):
    computer = choices[2]
    break;
    default:
    computer = choices[1]
  }
console.log("computer choice: "+computer);
console.log("human choice " + human)

switch (human) {
  case "rock":
    switch (computer) {
      case "rock":
      console.log("tie!")
      break;
      case "paper":
      console.log("paper wins!")
      break;
      default: console.log ("rock wins!")
      break;
    } 
    break; 
    case "paper":
      switch (computer) {
        case "paper" :
        console.log("tie!")
        break; 
        case "rock":
          console.log("paper wins!")
          break; 
        default: 
          console.log("scissors wins!")
          break;  
      }
      break; 
      case "scissors":
        switch (computer) {
          case "scissors":
            console.log("tie!")
            break;
            case "rock":
            console.log("rock wins!")
            break; 
            default:
              console.log("scissor wins!")
              break;
        }
        break; 
       default: 
       human = prompt("Please choose either rock, paper or scissors"); 
}
// 20. What happens if your user enters something other than "rock", "paper", or "scissors?". Change your default case
//     to print a snarky message to the console if the input doesn't match any of the options.
else{
  human = prompt("Please choose either rock, paper or scissors");
}



// HEDS ER TALES?
// 21. Use the following variable for your coin flip action:
       var coin = Math.floor(Math.random() * 2);
//     We're using Math.random again, along with Math.floor.
//     Remember, Math.random gives you a random number between 0 and 1.
//     Calling Math.floor on that number will truncate the decimal, and give you a
//     random number within the bounds of your array. (In this case, our array will only contain two items.)
// 22. Use a while loop to keep flipping the coin until you get tails.
//helpful to set the condition to what you don't wan to get what you want...which is flipping until tails.
var coin = Math.floor(Math.random() * 2);
var game = "heads";

while(game === "heads") {
  var coin = Math.floor(Math.random() *2);
  console.log(coin)
  if(coin === 1){
    game = "heads";
    console.log("heads..ugh");
  }
  else {
    game = "tails";
    console.log("yay, you got tails!");
  }
};

// → 1024
// 23. FIZZ BUZZ
// Write a program that uses console.log to print each number up to 100, with a couple exceptions...
// If the number is divisible by 3, print "Fizz" instead of the number.
// If the number is divisible by 5, print "Buzz" instead of the number.
// If the number is divisible by both 3 and 5, print "FizzBuzz" instead of the number.


for (i=1; i<=100; i++){
  if ( (i%5==0) && (i%3==0)){
    console.log('FizzBuzz');
  }else if  (i%5==0) {
    console.log('Buzz');
  }else if (i%3==0){
    console.log('Fizz');
  }else {
    console.log(i);
  }
};

// CHESS BOARD
// 24. Write a program that creates a string that represents an 8×8 grid, using newline characters to separate lines.
// At each position of the grid there is either a space or a “#” character. The characters should form a chess board.
var size = 8;
var block = "#";
var space = '';

for (var i= 1; i<=size; i++) {          
  var line = " ";
                                      
  for(var y=1; y<=size; y++){       
    if (i%2){                         
      if (y%2) {
        line = line + space;
      } else {
        line = line + block;
      }
    } else {
      if (y%2) {
        line = line+block;
      } else{
        line = line + space;
      }
    }
  }
  console.log(line);
}

//Passing this string to console.log should show something like this:

//  # # # #
// # # # #
//  # # # #
// # # # #
//  # # # #
// # # # #
//  # # # #
// # # # #

// When you have a program that generates this pattern, define a variable size = 8 and change the program
// sso that it works for any size, outputting a grid of the given width and height.

// THAR BE DACHSHUNDS
// We're going to slay some badass dachshunds.
// 25. Start by using the following variables:
var slaying = true;
var youHit = Math.floor(Math.random() * 2);
var damageThisRound = Math.floor(Math.random()*5 + 1);
var totalDamage = 0;

// 26. Create a while loop that runs as long as "slaying" is equal to true. For now, set "slaying" to false
//     inside of the body of the loop so we don't break stuff with an infinite loop.

// 27. Inside of your while loop, create a conditional statement. If "youHit" is 1 (which is true),
//     log to the console a congratulatory message about injuring the poor dog.
//     If "youHit" is 0 (which is false), log to the console a message about that bastard beating you.
//     The "slaying" variable should be set to false here to end the loop.
// 28. Inside of the first branch of our conditional statement, after the console.log statement,
//     set "totalDamage" to totalDamage plus damageThisRound.
// 29. Below that, begin a new conditional statement. If you hit the dachshund 4 times, you killed him! Log a success message to the console.
//     If the totalDamage is less than 4, set the youHit variable to the same expression we used at the top.
//     This will begin the loop again.
// 30. Play until you win!
var slaying = true;
var youHit = Math.floor(Math.random() * 2);
var damageThisRound = Math.floor(Math.random()*5 + 1);
var totalDamage = 0;

while(slaying === true){
  if(youHit === 1){
    console.log("Congrats, nice hit!");
    totalDamage += damageThisRound;
      if(totalDamage >= 4){
        console.log("success, you win!");
        slaying = false;
      }
      else {
        youHit = Math.floor(Math.random() * 2);
      }
  }
  else if(youHit === 0){
    console.log("bummer, he got you!");
    slaying = false;
  }
};

