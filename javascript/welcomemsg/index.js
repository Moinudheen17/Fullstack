let welcomeEl = document.getElementById("welcome-el");
let name =  "Moinu"
let greeting = "Welcome back, "
welcomeEl.innerText = greeting + name;
let name = "Linda"
let greeting = "Hi there"

// Create a function that logs out "Hi there, Linda!" when called

function log(){
    console.log(greeting + ", " + name + "!")
}
log()
