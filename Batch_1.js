// `` - backticks,template literals, template strings 
// `my age is ${12+2}`  //this will give my age is 14 because in backticks ${} refers to dynamic value means we have to solve and present the answer

//split 
// split ke andar humne kuch bhi likh diya toh us string mein jaha jaha woh chiz likhi hogi waha waha woh string tut jayegi 
// let str = "Hello ji kaise ho";
// let ans = str.split(`i`);   // jaha jaha i h waha se string tut jayega   //   
//📌 split() Rule: The split/seperator character acts as the scissors, not the paper. JavaScript throws away the separator to create the cuts

//replace
// let str =  "Hello ji kaise ho";
// let ans = str.replace(`i`, `j`);     //yaha main string mein replace nahi hota ek copy create hoti h aur uss copy mein change hota h
// replace sirf first occurence ko change karta h saare occurence ko nahi karta saare occurence ke liye str.replaceAll

//includes 
//yeh check karta h ki humare string mein koi particular chiz h ki nahi
let str = "Hello, world";
let ans = str.includes(`,`)