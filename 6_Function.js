//agar hum koi code likhte h toh woh turant chal jaata h
// console.log("dance");  // yeh likhte hi turant chall jaata h 
//isliye hum functions ka use karte h ki jab hum chahe tab humare code chale,jaise ac hai toh jab hum button chalaye tab ac chale

function dance(){
    console.log("dance");
    console.log("dance");         //yeh tabtak nahi chalega jabtak hum function ko call nahi karte 
    console.log("dance");
    console.log("dance");
}
dance();    //yaha humne function ko call kiya toh dance aayega output mein

// use:
//1. agar hum normally console.log("dance") likhte toh hume agar 4 baar dance chahiye hota output mein toh 4 baar console.log() likhna padta but agar hum function bana dete toh agar
//   jaise upar wale mein 4 baar likha h toh agar function ek baar run karenge toh 4 baar output aayega 2 baar run karenge toh 8 baar aayega matlab multiple output aa sakta h 
//   bina baar-baar likhe
//2. code automatically run nahi karega jab hum function ko call karenge tab chalega

// format
//function ke aage koi bhi naam likho kuch bhi likh sakte h but kya nahi likh sakte number,keyword(if,else ye sab),special character(%,*,# ye sab)
// function koinaam () {}  ---format

//ek aur tarika h function banane ka
//ek variable bana lo aur us variable ki value function bana do
let fnc = function(){                          // variable ka naam hi function ka naam h function ka naam fnc h     
    console.log("hufsnja");
}
                            //function declaration,expression, and arrow functions//

//function declaration/statement
function abcd(){
    //this is function declaration/statement
}

//variable mein save karne ko function expression kehte h 
let fnc = function(){

}

//arrow function/fat arrow function 
let fnc = ()=>{            //fnc matlab variable   fat() arrow =>  function isko kehte h 
    consnole.log()
}

                       //parameters vs arguments //

function dance(){
    console.log("ghoda naach raha h");
}

dance();
//yaha mein jitni baar dance likhunga toh mujhe ghoda naach raha h hi output aayega but mein agar animal ka naam har baar change karna chahta hu toh dynamic typing karni padegi, kyuki 
//console mein humne ghoda likh diya h isliye ghoda hi output aayega, isliye hum aise likhenge
function dance(v1){    //v1 ke jagah kuch bhi likh sakte the
    console.log(`{v1} naach raha h`);
}
dance("ghoda");
dance("hirad");

function add(v1, v2) {     //function ke bracket mein jo values aati jaise yaha v` aur v2 usse parameter kehte h
    console.log(v1 + v2) 
}

add(1, 2); //3   //yaha hum real values bhej rahe h yeh arguments h 
add(33, 4);  //37

                                      //Default,Rest and spread parameters//

//default parameter 
function add(v1, v2){
    console.log(v1, v2);
}                            //yaha humne add mein kuch diya nahi h toh jub hum console run karenge toh v1 aur v2 undefinied aayenge agar add mein 1 hota toh 1 aur undefinied aata
add();                       //agar kuch nahi diya h toh undefinied aata h

function add(v1, v2){
    console.log(v1 + v2);
}                              //yaha add mein kuch nahi h toh v1 aur v2 undefinied honge 2 undefinied ko add karenge jo number nahi h toh NaN aayega 
add();

function add(v1= 0, v2= 0){
    console.log(v1+ v2);
}
add();               //yaha kuch nahi diya h toh parameter mein assume kar sakte h yaha humne v1 aur v2 ko parameter mein 0 liya toh ans 0 aayega agar 1 aur 2 lete toh 3 aata sum hoke 
                     // agar hum v1= 0 aur v2= 0 parameter mein rakhe aur add mein 3,4 likhe toh v1 3 hojayega aur v2 4 hojayega matlab,jo hum value denge woh parameter mein store hojayegi

//rest parameter
function abcd(...val) {
    console.log(val);
}

abcd(1,2,3,4,5,6,7,8,9,10);         //yaha humne 10 value di h toh pehla toh yeh h ki hum parameter mein jaise a,b,c,d karke 10 likhe ek ek value ke liye ya toh ... karke likhde 
                                    //isse ek array create ho jata h 
//jab arguments bahut saare ho toh hume utne hi parameters banane padenge, issey bachne ke liye hum rest,spread(...) ka use karte h 
//agar ... function ke paramter space mein lage toh woh rest operator hai
//agar woh arrays and objects mein lage to wo spread operator hai(aaray and object hum baad mein padenge)

function abcd(...val){        //agar hume function mein yeh 6 num nahi likhne toh hum ...val likhenge usm yeh 6 value aa jayenge
    console.log(val);
}
abcd(1,2,3,4,5,6);

function abcd(a,b,c, ...val){        //isse a b c mein 1,2,3 aayega aur val mein remaining values 4,5,6
    console.log(a,b,c, val);
}
abcd(1, 2, 3, 4, 5, 6);

//return matlab jaha se aaye ho wahi daal denge
function abcd(){
    return 12;
}
let val = abcd();
console.log(val);

function abcd(v){
    return 12 + v;
}
let val = abcd(23);
console.log(val);

