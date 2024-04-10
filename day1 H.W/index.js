//loop_1_m

// let i = 0
// while (i <= 100) {
//     console.log(i)
//     i += 1  }


// let row_numbers = "";
// for (let i = 1; i <= 100; i++) {
//     row_numbers += i;  }
// console.log(row_numbers);


//loop_2_m


// let i = 1;
// let sum = 0;
// while (i < 6) {
//     let number = parseInt(prompt("please enter a number, you have filled " + i + "/5 numbers"));
//     sum += number;
//     i += 1;  }
// console.log('this is the sum of the numbers you have entered: ' + sum)
// console.log('this is the average of the numbers you have entered: ' + parseFloat(sum / 5))



// let sum = 0;
// for (let i = 1; i < 6; i++) {
//     let number = parseInt(prompt("please enter a number, you have filled " + i + "/5 numbers"));
//     sum += number;  }
// console.log('this is the sum of the numbers you have entered: ' + sum)
// console.log('this is the average of the numbers you have entered: ' + parseFloat(sum / 5))


//loop_3_m


// let number = 2;
// while (number <= 50) {
//   console.log(number);
//   number += 2;

// for (let Number = 2; Number <= 50; Number += 2) {
//     console.log(number);  }


// console.log("Even numbers to 50:");
// let num3 = 2;
// do {
//   console.log(num3);
//   num3 += 2;
// } while (num3 <= 50);

//loop_4_m


// let number = 1;
// while (number <= 50) {
//   console.log(number);
//   number += 3;  }


// for (let i = 1; i <= 50; i += 3) {
//     console.log(i);
// }

// console.log("Numbers from 1 to 50 with steps of 3:");
// let num = 1;
// do {
//   console.log(num4);
//   num += 3;
// } while (num <= 50);

//loop_5_m

// let targetNumber = Number(prompt("Insert a number: ")),
// factorial = 1;
// for (let i = 1; i <= targetNumber; i++) {
// factorial *= i; }

// alert("Factorial: " + factorial);

// let targetNumber = Number(prompt("Insert a number: ")), factorial = 1;
// do {
//   factorial *= tagretNumber;
//   targetNumber--;
// } while (targetNumber > 0);
// alert("Factorial: " + factorial);



//loop_6_m

// let max,min,userNumber,tracker = 0;
// max = Number(prompt("Please insert a number: "));
// min = max;
// while (tracker < 4) {
// userNumber = Number(prompt("Please insert a number: "));
// if (userNumber < min) {
//   min = userNumber;
// } else if (userNumber > max) {
//   max = userNumber;
// }
// tracker++;
// }
// alert("The highest number was: " + max);
// alert("The lowest number was: " + min);


// let max,min,userNumber,tracker = 0;
// do {
//   if (tracker == 0) {
//     max = Number(prompt("Please insert a number: "));
//     min = max;
//   } else {
//     userNumber = Number(prompt("Please insert a number: "));
//     if (userNumber < min) {
//       min = userNumber;
//     } else if (userNumber > max) {
//       max = userNumber;
//     }
//   }
//   tracker++;
// } while (tracker < 5);
// alert("The highest number was: " + max);
// alert("The lowest number was: " + min);


// loop_9_m

// let min = Number.MAX_VALUE, max = 0, userNumber;
//       while (true) {
//         userNumber = Number(prompt("Please insert a number, insert 0 or above in order to stop: "));
//         if (userNumber > 0) {
            
//           if (userNumber < min) {
//             min = userNumber;
//           }
//           if (userNumber > max) {
//             max = userNumber;
//           }
//         } else {
//           break;
//         }
//       }
//       alert("Highest number was: " + max);
//       alert("Lowest number was: " + min);



// loop_10_m


// let num = String(prompt("please enter a positive number with a number of digits"));

// for (let i = 0; i < num.length; i++) {
//     let digit = parseInt(num[i]);
//     console.log(`Digit ${i + 1}: ${digit}`);
// }



//loop_11_m

// let numberToPredict = Math.floor(Math.random() * 99)+1;
//       let startTime = new Date();
//       let numOfGuesses = 0, currentGuess = Number(prompt("Please insert your guess: "));
//       do{
//         if (currentGuess != numberToPredict){
//           if(currentGuess > numberToPredict){
//             alert("You are above the number!");
//           } else {
//             alert("You are below the number!");
//           }
//           currentGuess = Number(prompt("Please insert your guess: "));
//           numOfGuesses ++;
//         }
//       }
//       while(currentGuess != numberToPredict);
//       let endTime = new Date();
//       let difference = (endTime - startTime)/1000;
//       alert("Well done, " +numberToPredict+" was the number! it took " + numOfGuesses+ " guesses in "+difference+" seconds");




// to do list:
//you need to make all of the 6 first loops with do while function
//loop_9_m not complete
