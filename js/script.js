//MY VERSION
const btn = document.getElementById("nav-btn") 
const menu = document.querySelector(".nav")
 
function menuDisplay() {
    console.log(`this is menu style on run ${menu.style.display}`);
    if (menu.style.display === "") {
        menu.style.display = "flex";
    }
    else if (menu.style.display === "flex") {
        menu.style.display = "";
    }
    console.log(`this is menu style after click ${menu.style.display}`);
}
btn.addEventListener("click", menuDisplay);


//MAYA VERSION
const nav = document.querySelector(".nav");
const menu_btn = document.selectById("nav-tbn");
console.log(nav);

menu_btn.addEventListener("click", () => {
    console.log("We clicked the btn", nav.style.display); //nav.style.display here will show nothing because we console.log before the actual action taken on the next line
//Version 1
    if (nav.style.display === "flex") {
        nav.style.display = "none";
    }
    else {
        nav.style.display = "flex";
    }

//Version 2
    if (nav.style.display !== "flex") {
        nav.style.display = "flex";
        nav.style.animationName = "slide-in";
        return; //use early return so we don't have to nest lines 44-47 into else if statement to avoid having too many many curly braces in a complicated code. Often used to simplify code
    }
    nav.style.animationName = "fade-out";
    setTimeout(() => {
    nav.style.display = "none"; //so the menu don't pop back again, we make it desappear permanent, otherwise
    console.log(nav.style.animationName);
    }, 1000)

    console.log("We clicked the btn after", nav.style.display);
    
})











