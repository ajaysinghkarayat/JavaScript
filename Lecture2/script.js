//Arithmatic Operators

// let a = 5;
// let b = 2;

// console.log("a + b = ", a + b);
// console.log("a - b = ", a - b);
// console.log("a * b = ", a * b);
// console.log("a / b = ", a / b);
// console.log("a % b = ", a % b);
// console.log("a ** b = ", a ** b);

// let c = 10;
// let d = "10";

// console.log("c == d", c == d); // when a string is having only number then javascript implecitely converts string into number then compairs the numbers so if we don't want to this then we use strict version of equal to or not equal to ===.


// 


let score = prompt("enter the score");
if(score >= 90 && score <=100)
{
    console.log("A");
}
else if(score >= 70 && score <=89)
{
    console.log("B");
}
else if(score >= 60 && score <=69)
{
    console.log("C");
}
else if(score >= 50 && score<=59)
{
    console.log("D");
}
else
{
    console.log("F");
}