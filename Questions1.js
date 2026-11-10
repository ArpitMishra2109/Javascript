//Q.1) print numbers from 1 to 10 using a for loop
// for(let i =1; i<=10; i++){    
//     console.log(i);
// }

//Q.2) print numbers from 10 to 1 using a while loop
// let i =10;
// while(i>=1){
//     console.log(i);
//     i--;
// }

//Q.3) print even numbers from 1 to 20 using for loop
//my method
// for(let i =2; i<=20; i+=2){
//     console.log(i);
// }
//sir method
// for(let i =1; i<21; i++){
//     if(i % 2 === 0){
//         console.log(i);
//     }
// }

//Q.4)print odd numbers from 1 to 15 using a while loop 
// let i =1;
// while(i<=15){
//     console.log(i);
//     i+=2;
// }
//sir method
// let i =1;
// while(i<=15){
//     if(i%2 === 1){
//     console.log(i);
//     }
//     i++;
// }

//Q.5)print multiplication table of 5 (i.e. 5 x 1 = 5 ....)
// for(let i =1; i <11; i++){
//     console.log(`5 * ${i} = ${5 * i}`);          // `` ke andar jo bhi likho as it is print hota h aur ${} use karte h dynamic value ke liye matlab jo change hoti h 
// }

//Q.6)find the sum of numbers from 1 to 100 using a loop
// let sum = 0;
// for(let i =1; i<101; i++){
//     sum = sum + i;
// }
//   console.log(sum);        //console.log } ke andar likhenge toh har ek sum ka answer milega aur bahar likha toh direct toal sum milea

// Q.7) print all numbers from 1 to 50 that are divisible by 3 
//  for(let i =1; i <51; i++){
//     if(i % 3 === 0){
//         console.log(i); 
//     }  
//  }

// Q.8) ask the user for a number and print whether each number from 1 to that number is even or odd
// let val = prompt("give a number");

// for(let i =1; i <= val; i++){
// if(i % 2 === 0){
//     console.log(`${i} is even`);
// }
// else{
//     console.log( `${i} is odd`);
//    }
// }

// Q.) count how many numbers between 1 to 100 are divisible by both 3 and 5
//  let count = 0;
// for(let i =1; i <101; i++){
//     if(i % 3 ===0 && i % 5 === 0){        //to get the count
//        count++;
//     }
//     console.log(count);
// }
// for(let i =1; i <101; i++){
//     if(i % 3 ===0 && i % 5 === 0){             // to get the exact numbers 
//      console.log(i); 
//     }
// }

                 ///////

// Q1. Stop at first multiple of 7 

// write a loop from 1 to 100 that 
  //- prints each number
  //stop completely when it finds the first number divisible by 7
// for(let i =1; i <101; i++){
//     if(i%7 === 0){
//         break;
//     }
//     console.log(i);       // agar 7 ko bhi print karna tha toh if ke upar likh dete
// }

// Q.2) skip multiples of 3 
//write a loop from 1 to 20 that 
// - skips numbers divisible by 3 
// - prints all others 

// for(let i =1; i <21; i++){
//     if(i % 3 === 0){          // hum aise bhi likh sakte   if( i % 3 === 0) continue;
//         continue;             //                           console.log(i);
//     }
//     console.log(i);
// }

// Q.3) print first 5 Odd numbers only

//write a loop from 1 to 100 that
// - prints onlyy 5 odd numbers 
// - then stops the loop
// use both if, continue, and a counter + break
//1,3,5,7,9

let count = 0;
for(let i =1; i <101; i++){
    if(i % 2 === 1){
        count++;
        console.log(i);   
    }
    if(count === 5) break;
}
 