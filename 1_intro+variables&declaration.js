/* data jo hum store karte h temporarily woh hum variables mein karte h, javascript mein 3 hai var,let,const var use nahi karte as it is old let aur const use karteh.

                                                               //  var let const //

1.var- isko hum use karte h ki maanlo humare pass ek value h jisse hum baad mein access karna chahte h but baad mein bhul gaye ya value badi h toh hum ek variable create karke ussme
 store kar dete h

 var a = 12;-----
//jab bhi hum variable ko var se banate h toh "window" mein add hota h/jab bhi variable window mein add hota h toh woh var se bana hota h
//function scoped hota hai var
ex.)  function abcd(){
        if(true){
             var a = 12;
        }
}
kisi aur language mein agar if mein var create kiya hota toh woh sirf 
if mein use hota but js mein yeh function scoped h isliye pure function mein kahi bhi use ho sakta h
// var ko aap same name se firse declare kar sakte ho aur error nahi aayega(but yeh ek galat chiz h ki ek naam ke 2 value h toh error hona chahiye isliye hum let use karte h kyuki iske
liye let mein error aa jata)
  var a = 12;
  var a = 13;


 ways to write----
 var a;
 var a = 12;
 let a;
 let a = 12;
 const a = 12;

2.)let-use karenge agar hum kabhi value badalni ho
3.)const-use karenge jab hume value as it is rakhni ho agar change karenge toh error aa jayega,const tab use karenge jab hume maalum ho ki yeh value change nahi hone waali

//// declaration and initialization
var a;---declaration(variable banaya but value nahi di)
var a = 12;---declare and initialize(variable banaya aur first value di,initialization matlab first value dena )

                                                         // scope(global, block, functional) //
scope--humne variable banaya toh yeh variable kaha tak use ho sakta h usse scope kehte h
agra humne directly ek variable banaya toh yeh pure code mein use ho sakta h but agar humne variable ko maanlo ek function mein banaya toh woh sirf function mein use ho payega
1.global scope variable--aisa variable jo kisi bhi curly braces ke andar nahi h(global matlab pure code mein kahi bhi use ho sakta h)
2.block scope variable-- {}isko block kehte h but var {} ki respect nahi karta kyuki woh function scoped h isliye woh pure code mein use ho jayega but agar hum let use karenge toh woh
iske andar hi use hoga 
3.function scope variable.-- funstion ke andar var use kiya toh woh function ke andar hi use hoga, agar maanlo ek function ka {} h toh let isme use hoga but agar function ke andar 
ek if {} h toh let if ke andar use hoga naki function mein matlab woh apne parent braces mein use hota h

                                                                 // reassignment, redeclaration //
reassignment(wapas se value dena)--
var a = 12;                     let a = 12;
a = 32;                           a = 32;

redeclaration(fir se declare karna matlab firse var ya let ka use karna)(possible with var not possible with let)
var a = 12;
var a = 233;

Why let over var?
No Redeclaration → Same variable ko dubara declare nahi kar sakte, mistakes kam hoti hain.
Block Scope → Sirf {} ke andar hi accessible hota hai.
Safer Hoisting → Declare karne se pehle use nahi kar sakte.
Loops → Har iteration ke liye naya variable banta hai, isliye unexpected output nahi aata.

                                                         // temporal dead zone(tdz) //
//// tdz---utna area jitne mein js ko pata toh h ki variable exist karta hai par woh aapko value nahi de sakta

 ex.) console.log(a);// a ki value maang raha h

     let a = 12; // a ko initialize kiya

  / isme error aa raha h ki a ko aap initialize karne se pehle access nahi kar sakte, but js ko kaise pata ki humne value maangne ke baad initialize kiya kyuki woh toh value maaangne 
     waali line pe hoga toh usko kaise pata next line pe a ko initalize kar diya h,matlab yaha par console.log(a) ko already pata h ki aage jaake a naam ki value milegi
  //maanlo tdz 1 line pe h aur let a = 12;maanlo 15th line par toh hum 14th line tak a ko access nahi kar sakte
  // matlab humare variable banne ke upar ka area tdz hota hai us variable ka 


//// hoisting impact per type

// hoisting--> ek variable ko jab js mein banate hai toh wo variable do hisso mein toot jaata hai  uska declare part upar chala jaata hai aur uska
               initialization part niche reh jaata hai
                
var a = undefinied;
console.log(a);
a = 12;          // var a = undefinied upar chala gaya aur a=12 niche reh gaya  but hum cosole log(a) ko a = 12; se pehle access kar pa rahe h aur uski value undefined hai kyuki declare
                            upar chala gaya

var,let,const sabme hoisting hoti h 
var ->undefined(value)
let -> X (value set nahi hoti reference error aaata h)
const -> X (value set nahi hoti reference error aaata h)

let --->
console.log(a);
a = 12;               //but let kehta h ki initialize kiye bina access nahi kar sakte
but error aata h ki cannot access a before intialization rather declaration matlab kyuki apni line 2 part mein break hoti h toh a already upar declaration(declare wala part top pe moveho gaya hoga)
 ho chuka h isliye initialize 
 a declare toh ho chuka h but woh abhi tdz mein h aur hum usse tdz  mein access karne ki try kar rahe h isliye error aayega kyuki woh intialize nahi hua h sirf declare 

 // const mein value reassign karna is not allowed but hum value ko update kar sakte h.

*/

                   //const imp concept//
const user = {
    name: "Arpit"
};

user.name = "Rahul";

console.log(user.name);

// here we didnt reassign value 
user = anotherObject; // ❌
would be reassigning user.

user.name = "Rahul"; // ✅

doesn't replace user. It changes the content/property of the existing object. That's called mutation.

const → variable reassignment ❌, object contents mutation ✅
