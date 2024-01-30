let btn = document.querySelector("button");
let body = document.querySelector("body");
let mode = "light";

const callback = () =>
{
    if(mode === "light")
    {
        mode = "dark"
        console.log("dark");
        // document.querySelector("body").style.backgroundColor = "black";
        body.classList.add("dark");
        body.classList.remove("white");
    }
    else
    {
        mode = "light"  
        console.log("light")
        // document.querySelector("body").style.backgroundColor = "white";
        body.classList.add("white");
        body.classList.remove("dark");
    }
};

btn.addEventListener("click", callback);