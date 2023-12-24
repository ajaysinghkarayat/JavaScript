// function myFunction(msg)
// {
//     console.log(msg);
// }
//..............................
// myFunction("Hello");

// function sum(a,b)
// {
//     console.log(a+b);
// }

// sum(3,4);
//..........................................
// let arrowSum = (a,b) => {
//     console.log(a+b);
// };

// arrowSum(2,3);
//..................................
// let count = 0;

// function vovel(str)
// {
//     for(let char of str)
//     {
//         if(char === 'a' || char === 'e' || char === 'i' || char === 'o' || char === 'u')
//         {
//             count++;
//         }
//     }
//     console.log(count);
// }

// vovel("elephant");
//.....................................................

// let count = 0;

// let vovel = (str) =>
// {
//     for(let char of str)
//     {
//         if(char === 'a' || char === 'e' || char === 'i' || char === 'o' || char === 'u')
//         {
//             count++;
//         }
//     }
//     console.log(count);
// };

// vovel("elephant");


// let arr = [1, 2, 3, 4, 5];

// arr.forEach(function printVal(val)
// {
//     console.log(val);
// });

// let arr = [1, 2, 3, 4, 5];

// arr.forEach((val) => {
//     console.log(val);
// })

let arr = [1, 2, 3, 4, 5];

arr.forEach((val, idx, arr) =>
{
    console.log(val, idx, arr);
});

let x = [1, 2, 3, 4];

x.forEach((val) => {
    console.log(val * val);
});