/*
// + - x ye asab operators hote hai matlab jo kuch perform karte h
// Arithmetic, comparison, logical, assignment, unary, ternary 

                                     // Arithmetic Operators --> + - / * % ** //

1. + -->    / isme addition aur concatenation hota h
1 + 2 = 3
"ar" + "pit" = "arpit"

 2. -  --> 3 - 2 = 1  / sirf subtract karta h 
 3. /  --> 12/2 = 6
 4. *  --> 12*2 = 24
 5. %(modulus)  --> 12%2 = 0        /remainder deta h divide hone ke baad 
 6. **(exponentiation) -->  2 ** 3 = 8   // matlab 2 ki power 3 ** matlab power 
 
                                    // Comparison Operators 

//  ==  --> 12 == 13 //false  /check karta h ki dono side equal hai ya nahi          / not strict comparison
 but ek issue h ki properly check nahi karta   12 == "12" //true  / jabki false hona chahiye kyuki right mein string isko correct karta h ===
 == sirf yeh dekhta h ki value same h ya nahi woh type ko check nahi karta 
//  ===  -->  12 === "12" //false                 / strict comparison
//  !=(not eqaul) --> 12 != 13 //true  /= aur == ulta h agar ek true toh dusra false         / not strict comparison
                   12 != "12" //false 
//  != ka same issue h jo == ka h type check nahi karta   
//  !==  12 !== "12" //true                                                    / strict comparison
//  >= --> 12 >= 12 //true
//  <= --> 12<=12 //true
//  < -->  12<9 //false
//  > -->  12>9 //true

                                    // Assignment Operators //
 
//   = --> value dalna // let a = 12 yaha pe a mein value dali h
//  += / let a = 12;   a+=3  a = 15(new value) / value ko update karo aur vapas save karo 
//  -= / a-=11; a = 4(new value, a+ ne a ko 15 kar diya tha )
//  *= / a*=2; new value=8 / value ko multiply karo jisse karna h aur wapas update kardo
//  /= / a/=2; new value=4 /jo bhi value chal rahi h usko divide karke update kardo 
//  %= /a %= 3; new value=1 / a ki jo bhi value chal rahi usko 3 se divide karke jo remainder bache usse update kardo

                                    // Logical Operators //  --> &&, ||, !
// &&(AND Operator) --> && ke left and right dono side true toh true warna false 
   / true && true -> true,  true && false -> false, false && false -> false
   / 12>13 && 13>12  -> false && true -> false
// ||(OR Operator) --> ek bhi true toh true 
   / false || true --> true
// ! --> true ko false, false ko true kar deta h
   / !true -> false 
   humne  padha tha ki agar hume truthy aur falsy value dhudna h toh !! ka use karte h toh first mein uske value ka ulta karta tha aur vaps ! lagane par wapas value dedeta tha

                                    // Unary Operator //  --> + - ! typeof ++ -- (jo single value par apply hota h)
   // agar humare pass ek string h toh uske aage + lagane se  woh number mein convert ho jayega / +"12" -> 12  / +"arpit" -> NaN  (naam h toh NaN mein convert hoga)
   //agar ek number ko negative tohjust uske saamne - laga do / -12 -> -12
   // !(not)  kisi ke aage lagane se uske inverted value dikhta h jaise true ka false 
   // type of jiske aage likhenge uska type bataega
   // ++ --> let a = 2;  
             ++a = 3;  ++a matlab pegle increment fir display
             let a = 2;
             a++;   matlab pehle print fir increment  / a=2;  a++ + a = 3+2 = 5
   a++ matlab abhi ke liye woh value likh rahe h but next time udki increased value dikhayenge
   // --  -> let a =3;
             --a = 2;  pehle value decrease hogi
             a--  = abhi ke liye 3 likhenge next time vapas aayega toh 2 likhenge 
                                   // ternary operator //
   // ?:  --> (how it looks)  condition ? true hui ka code : false hui ka code  --> agar true toh ? ke baad wala display aur agar false toh : ke baad wala display
      12>13 ? console.log("true") : console.log("false");    -->prints false 

      //mistakes by type of 
   type of null --> object (which should be wrong as it is a value but in js its object)
   type of [] --> 'object'  whereas [] represents an array 
   type of NaN --> number

                                  // instanceof  //
   condition:works only for reference values and for primitive gives false 
   // let a = [];  typeof a = 'object (whuch is wrong)
   we use; a instanceof Array(a capital kyuki calss ki baat ho rahi) yeh puch raha for ex ki kya a Array ka vanshaj hai jo ki true h 
   let b = {}; b instanceof object --> true;     b instanceof Array --> false
   variable instanceof given class/function   --> variable diya h aur check karenge ki kyawoh us class se belong karta h ya usme se aaya h

                                  // common confusion //

   1. why !! for truthiness
   agar hum kisi bhi value/variable ke saamne !! lagate h toh uska true nature matlab true ya false maaalum padta h ek !  se value ulti ho jaati h aur !! se true value milti h. hum
   console mein humari value ke aage !! likhke pata kar sakte h ki true h ya false

   2. let i = 1;               // ++i se immediate value increase hokedisplay hoti h i++ se pehle display hoti h fir increase 
   console.log(++i) ;    // 2
   console.log(i++);     // 2 (but i is now 3)

   */