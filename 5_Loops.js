//repeat karne ko loop kehte h

//kaha se jana hai -> kaha tak jaana hai -> kaise jaana hai    //jab yeh sab pata ho tab use karne ka
//for

//kaha se jaana hai -> kab rukna hai -> kaise jana hai
//while

// 1-40 -- for --(1 se 40 jana hai aur 1-1 add hona chahiye)
// 20-30 -- for
// hello na ajaye -- while (jabtak hello na ajaye tabtak chalte raho)  //pata thodi h hello kab aayega
//lal color ka ped -- while 

//for//
 
//for( Start; end; change) {}   //format
//1- 100
// for( let i = 1; i<101; i++){
//     console.log(i)
// }

// //while//
// Start 
// while(end){
//     //code 
//     change
// }

// let i = 1;
// while (i < 32){         // 32 pe rukna h toh <32 toh 31 tak chalega aur 32 pe ruk jayega
//     //code 
//     console.log(i);
//     i++;
// }

// //do while//
// let i = 1;
// do{
//     console.log(i); //i ko print kar diya
//     i++  //hum yaha i ko aage badha rahe h 
// }
// while(i<20) // do karne ke baad humne condition dekhi 

// // matlab do mein pehle hum ek baar step karte h uske baad condition check karte h condition bhale hi sahi ho ya galat but usse pehle ek baar  do wala part execut ho jata h 
// let i = 12;
// do{
//     console.log(i); //i ko print kar diya
//     i++  //hum yaha i ko aage badha rahe h 
// }
// while(i<2)       //yaha humne 12 print kardiya aur fir usko 13 kar diya uske baad condition maalum padi ki i<2 hona chahiye matlab do ek baar toh execut hota hi h

// //break//
// for(let i =1; i<101, i++){
//         console.log(i);
//     if(i===32) {
//         break;      //jaise hi i ki value 32 ho jaye loop ko break kar do matlab iske aage loop nahi chalegi
//     }
// },

//continue//
for(let i =1; i<101; i++){
    if(i===32) {
        continue;       //matlab loop continue hoga bas 32 ko chodke 1-101 except 32,continue sidha isko 33 pe pohcha dega 
    }
    console.log(i);
}

//
//
///
//
//

`` - backticks,template literals, template strings 
`my age is ${12+2}`  //this will give my age is 14 because in backticks ${} refers to dynamic value means we have to solve and present the answer

