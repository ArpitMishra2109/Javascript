// assume karo hum seedha chal rahe the aur suddenly left ya right mein se ek jaana ho 
// toh hum decision making karte h ki yaha jaaye ya waha ye hum control flow statements ke thorugh karte h 

// if, else, else if
//switch case

/*
switch(val) {
    case 1: 
       console.log(hbwf)            //hum val mein kuch bhi likh sakte h agar 1 likha case 1 ke andar ka code execute hoga 
        break;          //break lagate h kyukiagar case 1 kacode chala uske baad woh case 2 mein chala jayega isliye break lagate h isse case 1 ke baad directly switch se exit kar jayega
    case 2:             
        break;
    case 3:
        break;
}

// //early return pattern


function getVal(val) {
    if (val < 25) return "D";           //yaha hum alag alag se if else baar baar nahi likh rahe ek hi function ke andar kar rahe h isse code easy to read hota h
    else if (val < 50) return "C";      
    else if (val < 75) return "B";
    else return "A";
    }   
*/

//rock paper scissor logic

function rps(user, computer) {     //normally multiple conditions bante h toh better way 
    if(user === computer) return "draw";      //agar dono same ho toh

    if(user === "rock" && computer === "scissor") return "user";
    if(user === "scissor" && computer === "paper") return "user";
    if(user ==="paper" && computer === "rock") return "user";
    //user ke win ke saare conition le liye iske alawa ab computer hi jitega
    
    return "computer";    //iske alawa koi bhi case aya maanlo rock,paper jo hai nahi toh woh bhi computer hi aayega 
}

console.log(rps("rock", "rock"));   //input