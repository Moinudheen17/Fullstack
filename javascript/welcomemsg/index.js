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

let myPoints = 3

// Create two functions, add3Points() and remove1Point(), and have them
// add/remove points to/from the myPoints variable


function add3Points(){
    myPoints += 3
}
function removalPoints(){
    myPoints -= 1
}

add3Points()
add3Points()
add3Points()
removalPoints()
removalPoints()
// Call the functions to that the line below logs out 10
console.log(myPoints)

console.log("2" + 2) //22
console.log(11 + 7) //18
console.log(6 + "5") //65
console.log("My points: " + 5 + 9) //My points: 59
console.log(2 + 2) // 4
console.log("11" + "14") // 1114

