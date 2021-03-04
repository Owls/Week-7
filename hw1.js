// 1
let chilidogs = "food";

//2
chilidogs = "bananas";

//3
const number = "Threehundredtwelve";

//4
if(true)
{
    //5
    var truth = true;
}
console.log(truth); //6

//7
if(true)
{
    let stringy = "words";
    //8
    console.log(stringy); // block scope due to let
}

//9
// number = "45";
console.log(number);

//10
const frong = [];

//11
frong.push("Prong", "Wrong", "Long");
console.log(frong);

//12
const empty = {}; //object

//13
empty.name = "Hunter";
empty.age = "27";
console.log(empty);

//14
console.log(`Hello my name is ${empty.name}!`);

//15
function greet(name, age)
{
    console.log(`Hello my name is ${name}! I am ${age}!`);
}

//16
const {name, age} = empty;
console.log(name, age);
greet(name, age);

//17
let arrow1  = () => 
{
    console.log("Hello World!");
}

//18
let arrow2 = (str) =>
{
    console.log(str);
}

arrow2("Long word.");

//19
let arrow3 = (num1, num2) =>
{
    return "Fool - you must not use Return!";
}

arrow3();
// console.log(arrow3());

//20
setTimeout(() => {console.warn("Ruh-roh!")}, 2999);

//21
for (const element of frong)
{
    console.log(element);
}

//22
for (const element in empty)
{
    console.log(element);
}