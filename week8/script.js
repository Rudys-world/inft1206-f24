// Declare JavaScript Variables 
// Assign variables to empty string 
let name = ""
let age = ""

// Retrieve DOM Elements for manipulation (or not)
const nameInput = document.getElementById("nameInput")
const ageInput = document.getElementById("ageInput")
const displayBtn = document.getElementById("displayBtn")
const resetBtn = document.getElementById("resetBtn")
const message = document.getElementById("message")

// Get color buttons 
const blueBtn = document.getElementById("blueBtn")
const greenBtn = document.getElementById("greenBtn")
const redBtn = document.getElementById("redBtn")

// Events: Change Background Color
blueBtn.addEventListener("click", () => {
    document.body.style.backgroundColor = '#3498db'
})

greenBtn.addEventListener("click", () => {
    document.body.style.backgroundColor = '#2ecc71'
})

redBtn.addEventListener('click', () => {
    document.body.style.backgroundColor = '#e74c3c'
})

// Events and Display
displayBtn.addEventListener('click', () => {
    nameA = nameInput.value
    age = ageInput.value

    message.textContent = `Hello ${nameA}! You are ${age} Years Old!`
})



