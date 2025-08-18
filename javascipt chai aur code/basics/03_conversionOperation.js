/*
let score ="3abc" //halaki ya string h "" ki vajah se 

console.log(typeof score)
// both are same use praentheses or not 
console.log(typeof (score))

let valueInNumber = Number(score)
console.log(typeof valueInNumber)
console.log(valueInNumber)
*/





/* 
let score = null // ab maan le iki value null hai to output 0 aara h

console.log(score)
// both are same use praentheses or not 
console.log(typeof (score))

let valueInNumber = Number(score)
console.log(typeof valueInNumber)
console.log(valueInNumber)
*/



/* 
let score = undefined // ab maan le iki value undefined likhdi to nAn AAYega
console.log(score)
// both are same use praentheses or not 
console.log(typeof (score))

let valueInNumber = Number(score)
console.log(typeof valueInNumber)
console.log(valueInNumber)
*/



/*
 let score = true// ab maan le iki value koi boolean value hai

console.log(score)
// both are same use praentheses or not 
console.log(typeof (score))

let valueInNumber = Number(score)
console.log(typeof valueInNumber)
console.log(valueInNumber) 
*/

// "33" => 33
// 33abc => NaN
//true =>1 ; false =>0


/*
let isLoggedIn = 1

let booleanisLoggedIn = Boolean(isLoggedIn)
console.log(booleanisLoggedIn)
*/

// 1=> true
// 0 => false
// "" =>false {empty string use krne par false aaya}
// "shaban" => true {string me kuch put krne k baad true aaya}

//conversion hamne number me kara aur boolean me ab string me krenge

/*

let someNumber = 33
let stringNumber = String(someNumber)
console.log(stringNumber);

//ye print ho rha h mtlb sahi hai

*/

let value = 3
let NegValue =(-value)
console.log(NegValue)

//   ********************OPERATORS************************ 

/*

// arithmetic operator
console.log(2+2); //addition
console.log(2-2);// subtraction
console.log(2*2);// multiplication
console.log(2**3);//exponentiation
console.log(2/2);//division
console.log(2%3);//modulus

++ INCREMENT
The increment (++) operator increments (adds one to)
 its operand and returns the value 
 before or after the increment, 
 depending on where the operator 
 is placed.


-- DECREMENT




*/

let str1 = "hello"
let str2 = " SHABAN"
let str3 = (str1 + str2)

console.log(str3); //arithmetic example



console.log("1" + 2); 
console.log(1 + "2");
console.log("1" + 2 + 2);
// upar 3 me simply ye h ki jab bhi koi string pehle ho
// to baki rest of number ya value ko bhi string hi output me deta h 
// sabko string bana deta hai

console.log(1 + 2 + "2");// aur isme aage pehle jo h string NAHI hai 
// to aage vale to simply add ho jayenge but jo baad me string rhega 
// vo value as a string rhegi agar baad me appear hoti h to

console.log(3+3*3/3);// ye likhne ka galat tarika hai
// hamesha values ko parentheses me likhna chaiye 

console.log( (3 + 3) * 4 % 5 );//like that



let gamecounter = (100)
++gamecounter
console.log(gamecounter);


//INCREMENT

let s = 3;
const r = s++;

console.log(`s:${s}, r:${r}`);// Expected output: "s:4, r:3"

let a = 3;
const b = ++a;

console.log(`a:${a}, b:${b}`);// Expected output: "a:4, b:4"

//****************************************************************************************//


//postfix increment
let x = 3;
const y = x++;
// x is 4; y is 3

let x2 = 3n;
const y2 = x2++;
// x2 is 4n; y2 is 3n


//PREFIX increment

let u = 3;
const v = ++x; // u is 4; v is 4

let u2 = 3n;
const v2 = ++x2;
// x2 is 4n; y2 is 4n













