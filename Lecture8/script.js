let button = document.querySelector("button");

//or
//let btn1 - document.querySelector("#btn1");

// button.onclick = () => {
//     console.log("Button is clicked 1");
// };

// button.onclick = (evt) => {
//     console.log(evt);
// };

// button.onmousedown = () => {
//     console.log("Button is pressed");
// };

// button.onmousemove = () => {
//     console.log("Button is pressed");
// };

// button.onmouseenter = () => {
//     console.log("Button is pressed");
// };

// button.onclick = (evt) => {
//     console.log(evt); // to print the event
//     console.log(evt.type); // to print the event type
// };

button.addEventListener("click", () =>{
    console.log("Button is clicked")
});




