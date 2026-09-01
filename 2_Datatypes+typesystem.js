/*
//data ke bohot saare types h unme se 2 main hai primitve aur referneces 

primitives-- inme brackets nahi aate,directly copy kar sakte h
// primitives –> aisi saari values jinko copy karne par tumhe ek real copy mil jaaye
// string, number, boolean, null, undefined, symbol, bigint

references-- inme brackets aate h, inko directly copy nahi kar sakte
// reference -> inko copy karne par real copy nahi milegi but aapko reference milega parent ka
// arrays, objects, functions
// []-array is wale bracket se banta h {}-object is wale se ()-function

// hum chahe koi bhi data likhe 12,man,,{}, ye sab ya toh primitive ya toh reference mein hi belong karenge 

let a = 12;
let b = a;          yaha a ke pass apna 12 h b ke pass apna 12 h for example 2 logo ka naam harsh but dono alag h uski tarah a,b dono 12 h but alag toh agar hum a mein change karte h 
toh b mein change nahi hoga

a = a + 2;   toh isse a ki value 14 ho jayegi but b ki value 12 hi rahegi 

                                    // primitives types //
strings--> data jo single quote('') double quote (" ") backtickes ( ``) le andar wrapped ho
number --> aap 12 likho ya 12.3 likho ye h numbers 
boolean --> true aur false 
null --> null ka matlab h aapne janbuch kar koi value nahi di ya fir humne ek variable create kiya h aur hum usme value baad mein deni h toh abhi ke liye hum null likh sakte h
undefined --> undefined ka matlab ki aapne ek variable banaya aur usey value nahi di to jo value by default mili wo hai undefined
//undefined matlab hume system se deaukt value milti h ur null matlab hum value dete h
symbol --> unique immutable value 
//future mein hum kuch libraries use karenge ab iss case mein un libraries mein kai baar kuch fields hoti hai jinse similar hum bhi bana dete h aur galti se humari banai hui fields us
library ke original files ko change kar deta h

let sheryjs = {
    uid = 12;
    model: "harsh",
}

sheryjs.uid = 1;       //yaha humne khudki uid bana di toh maanlo baadme hume kabhi shryjs mein uid = 12 access karna hoga but humara sheryjs.uid = 1 usko overwrite kar dega  aur hum
aisa nahi chahte isliye symbol ka use karte h 
let u1 = symbol("uid");
let u2 = symbol("uid");  //yaha humne ek copy create kiya but dono equal nahi h dono alag symbol h dono unique h

let obj = {
 uid:1 ,
 name: arpit,   // yaha ek object h kisme humne ek field create ki uid 
 age: 12,
};

let u1 = Symbol("uid"); // yaha humne ek symbol create kiya taki humare uid usko overwrite na kar de toh answer mein object ke hi details aayenge humare khudke uniwure uid 001 se naki 1 
obj[u1] = "001";



let obj = {
    uid:1 ,
    name: "arpit",   // yaha ek object h kisme humne ek field create ki uid 
    age: 12,
   };

let u1 = Symbol("uid"); // yaha humne ek symbol create kiya taki humare uid usko overwrite na kar de toh answer mein object ke hi details aayenge humare khudke uniwure uid 001 se naki 1 
obj[u1] = "001";

Bigint -->

// hum ek limit tak ek integer value ko hold kar sakte h jo hume NUMBER.MAX_SAFE_INTEGER likhne par console me malum padta h agar hum isse bada value lete h toh precision mein error
// aa sakte h manlo hum add karenge 4 aur addho jayega 5

isse bada integer lene ke liye humare pass ek data type h bigint ek integer ko bigint banane ke liye bas uske last mein 'n' lagane hota h aur fir precision values milengi fir chahe 1n
add kar ya 4n matlab add kar rahe h 4 but n kyuki bigint h


                                   // References types //---- agar = ke baad bracket dikh jaye toh samajh jao woh references h
//arrays,objects,functions

let a = [1,2,3];
let b = a;             // yaha reference value pass hoti h matlab agar aap b mein change karoge toh a mein bhi woh change aayega 
b.pop()    pop ka  matlab hum b se value hata rahe h but woh value a se bhi hat jayegi 

/ objects ke liye
let a = {
    name" "harsh"'
};
let b = a;

b.name = "harshita";

/ the same happens with functions hum yeh sab aage padhne wale h

                               // Dynamic Typing //
js mein static typing nahi h yaha par dynamic typing h jiska matlab hai app data ko change kar sakte ho kyuki yaha par dynamci data types h 
baaki language mein maanlo hum ek ek variable a ko boolean(true) bana diya toh baad mein hum usko string ya null ya undefined matlab change nahi kar sakte 
but hum javascript mein let karte h matlab hum bolte h ki yeh le lo matlab hum baad mein change kar sakte h
let a = 12;
a = true;   badal ke boolean kar diya
a = "harsh"; badal ke string kar diya
a = null;  badal ke null kar diya 

// dynamic typing or static typing
static typing is better than dynamic typing kyuki hum code likhenge toh hume pata hoga ki yeh integer h but maanlo dynamic typing ke liye humne 10000 ine ka code likha starting mein
humne kaha h ki a = 12 but baad mein humne galti se a ki value true kar di toh woh error batayega end mein aur yeh nahi batega ki a ko true likha toh utne bade code mein error dhundna
bahut mushkil h

//type of quirks (e.g., type of null === 'object')
hum har value ko check kar sakte h matlab uska type check kar sakte h matlab maanlo humare pass "arpit" h toh hum pata laga sakte h ki yeh string h 

hum console mein typeof aur uske aage 12 likhke pata kar sakte h ki yeh number h "arpit" likhke ki string h, NaN ka matlab not a number hota h but iska type number aata h
agar hum console mein NaN == NaN karte h toh false aata h aise agar hum [] + [] karte h toh '' yeh aata h aise hi '' + "" = '' , 1 + "1" = '11' toh aise bahut saare issues h javascript
mein aur isiko hum kehte h quirks
type of null = 'object'

                                 // Type coercion --> concept jisme aapka ek type automatically convert ho jaye

"5" + 1 = '51' yaha pe hum ek string ko number se add kar rahe h jo nahi hona chahiye but js mein hota h 
js mein + do chiz kar sakta h ek toh + aur dusra cocatenation add matlab normal 4+5=9 cocatenation matlab jod dena jaise 5+1=51 arpit + mishra = arpitmishra
toh yaha par js ne yeh 1 ko string banakar 5 se a cocatenate kar diya but 5 ko number kyu nahi banaya kyuki jo humare + ke left aur right mein hote h unhe operand kehte h toh
agar humara ek bhi operand string nikal gaya toh js yeh maanleta h ki hume cocatenate karna h
but, "5" - 1 = 4 aata h kyuki subtact sirf subtract kar sakta h aur kuch nahi + ki tarah 

                                // Truthy vs falsy value //

  0 --> 0,  false, "", null, undefinied, NaN, document.all    -- agar aisi value mili toh woh false h
  if(null) {
                   // if ke andar true ya false aana chahiye but null likha h oth hume pata h null false hota hh toh false
  }
   if(-1)  humare list mein -1 nahi h toh yeh true h 
  ****kaise pata kare ki value true h ya false toh uske aage !! laga do toh maalum pad jaayega(yeh ek trick h) 


why NaN is a number?
because in js NaN is a failed number operation, matlab agar hum 2xarpit karenge toh answer aayega NaN kyuki yeh aisa mathematical operation h jo ho nahi sakta, js kehta h ki yeh failed
operation hi tha yeh number hi but kyuki yeh failed hogaya isliye NaN de rahe h but type number h 

*/