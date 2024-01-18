// let heading = document.getElementById("heading")
// console.dir(heading)

// let headingclass = document.getElementsByClassName("heading-class")
// console.dir(headingclass)

// let para = document.getElementsByTagName("p")
// console.dir(para)

// let firstel = document.querySelector("p");
// console.dir(firstel);

// let allel = document.querySelectorAll("p");
// console.dir(allel);

// let head1 = document.querySelector("h1");

// let h2 = document.getElementById("add")
// console.dir(h2)
// h2.append(" from Apna College students")

//....................
let divall = document.querySelectorAll(".box");

console.log(divall[0]);
console.log(divall[1]);
//..............

let idx = 1;
for(div of divall)
{
    div.innerText = `new unique value ${idx}`;
    idx++;
}