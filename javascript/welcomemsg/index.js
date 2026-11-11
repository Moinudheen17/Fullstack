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


// When the user clicks the purchase button, render out
// "Something went wrong, please try again" in the paragraph
// that has the id="error".
errorEl=document.getElementById("error")
function buy(){
    error.textContent="Something went wrong, please try again" 
}

let num1 = 8
let num2 = 2
let sum =  "Sum: "
document.getElementById("num1-el").textContent = num1
document.getElementById("num2-el").textContent = num2

// Create four functions: add(), subtract(), divide(), multiply()
function add(){
    sumEl=document.getElementById("sum-el")
    sumEl.innerText = sum+(num1+num2)
}
function subtract(){
    sumEl=document.getElementById("sum-el")
    sumEl.innerText = sum+(num1-num2)
}
function divide(){
    sumEl=document.getElementById("sum-el")
    sumEl.innerText = sum+num1/num2
}
function multiply(){
    sumEl=document.getElementById("sum-el")
    sumEl.innerText = sum+num1*num2
}
// Cal
//Challenge:
//1. The following expression should calculate total expenses 
 //  for a trip, but it has a problem. It is giving me 548 but 
   //I think that is too cheap. Have a look, and see if you can 
   //figure out what problem we have with operator precedence and 
  // change the code so we log out the correct cost of the trip.

const tripLengthDays = 2
const tripDistanceKM = 300
const fuelPricePerKM = 1.5
const hotelCostPerNight = 60
const hotelDiscountPerNight = 6
const foodCost = 50

const totalCost = foodCost + tripDistanceKM * fuelPricePerKM + hotelCostPerNight - hotelDiscountPerNight * tripLengthDays

console.log(totalCost)


