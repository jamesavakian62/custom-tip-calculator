console.log("HELLOOOOOO");

//How do we get the image?
let darkMode = false
let themeBtn = document.getElementById("mode")
let themeLogo = document.getElementById("mode2")

let background = document.body.style
//let darkMode1=false

// How do I make my image clickable?

//   console.log(darkMode)
themeBtn.addEventListener("click", function() {
    if(darkMode == false) {
        //Change to dark
        darkModeProperties()
  
    } else {
        // Change to light
        lightModeProperties()
    }

})

// function darkModeProperties () {       // console.log("GOOD NIGHT SLEEP TIGHT") 
//     themeBtn.src = "./images/icon-sun.svg"
//     // How do we get the background color of the WHOLE HTML page
//     background.backgroundColor = 'rgb(20,29,47)'
//    container.backgroundColor = "red";
//     darkMode = true
//    }
   
// function lightModeProperties() {        // console.log("LET BE THERE LIGHT")
//     themeBtn.src = "./images/icon-moon.svg"
//    // themeBtn.src = "./images/icon-sun.svg"
//    background.backgroundColor = "hsl(185, 41%, 84%)";
//  //   background-color: rgb(255, 118, 0)
//     darkMode = false
//    }




// How can I record what input I put in the bill
// How do I get bill input?
// How do I make something run when i put something in my input?

let billInput = document.getElementById("bill-input")

billInput.addEventListener("change", function() {
    console.log(billInput.value)
})

let people = document.getElementById("number-of-people")
let customTip = document.getElementById("custom-tip")

people.addEventListener("change", function() {
    console.log(people.value)
})


// How do we get all the buttons?  and input
let percent = document.querySelectorAll(".button")  // buttons


console.log(percent)

percent.forEach((btn)=> {   
    btn.addEventListener("click", function() {
        console.log(parseFloat(btn.innerText)/100)
    })

})


// Then how do we give each of them an event listener

// HW: CREATE A FUNCTION THAT CAN CALCULATE THE TIP AMOUNT AND TOTAL AMOUNT PER PERSON
// IT SHOULD TAKE 3 PARAMETERS

//function calcTipSplit(bill,percent,amountOfPeople) {
    // Create the logic
    // console.log() two things:
    // Tip amount per person
    // Total amount per person
//}

//calcTipSplit(100,.15,2)

// console.log("HELLOOOOOO")

//How do we get the image?
//let darkMode = false
//let themeBtn = document.getElementById("mode")
//let background = document.body.style

let bill = 0;
let tipPercentage;
let amountOfPeople = 0;
let totalTip;
let totalAmountPerPerson;
let tipPerPerson;
let tipAmountPerPerson;
let totalPerPerson;

// How do I make my image clickable?


function darkModeProperties () {
    // console.log("GOOD NIGHT SLEEP TIGHT")
    
    themeBtn.src = "./images/icon-sun.svg"
    themeLogo.src = "./images/two.png"
//   mode2.src = "./images/me1.png"
    // How do we get the background color of the WHOLE HTML page
    background.backgroundColor = 'rgb(20,29,47)'
//     background.backgroundColor = 'rgb(193, 206, 230)'
 //   container.backgroundColor = 'rgb(20,29,47)'
   //   document.getElementByStyle("container").backgroundColor = 'white'  // 'rgb(20,29,47)'
    //  document.getElementByStyle("right").backgroundColor = 'white'  // 'rgb(20,29,47)'
    darkMode = true
   }
   
function lightModeProperties() {
    // console.log("LET BE THERE LIGHT")

    themeBtn.src = "./images/icon-moon.svg"
    themeLogo.src = "./images/james.png"
    background.backgroundColor = "hsl(185, 41%, 84%)";

    darkMode = false
   }

themeBtn.addEventListener("click", function() {
    if(darkMode == false) {
        //Change to dark
        darkModeProperties()
    } else {
        // Change to light
        lightModeProperties()
    }
})

// How can I record what input I put in the bill
// How do I get bill input?
// How do I make something run when i put something in my input?

//let billInput = document.getElementById("bill-input")

billInput.addEventListener("change", function() {
    let bill = billInput.value
    calcTipSplit(bill, percent, amountOfPeople)
})

//let people = document.getElementById("number-of-people")

people.addEventListener("change", function () {
    let amountOfPeople = people.value
        calcTipSplit(bill, percent, amountOfPeople)
})

// How do we get all the buttons?
//let percent = document.querySelectorAll(".button")


percent.forEach((btn)=> {
    
    btn.addEventListener("click", function() {
        tipPercentage = parseFloat(btn.innerText)
        calcTipSplit(bill, percent, amountOfPeople)
    })
})

customTip.addEventListener("change", function() {
    let customTipPercent = customTip.value;
    tipPercentage =parseFloat(customTipPercent)
    calcTipSplit(bill, percent, amountOfPeople)
})


// Then how do we give each of them an event listener


// HW: CREATE A FUNCTION THAT CAN CALCULATE THE TIP AMOUNT AND TOTAL AMOUNT PER PERSON
// IT SHOULD TAKE 3 PARAMETERS

// function calcTipSplit(bill,percent,amountOfPeople) {
//     // Create the logic


//     // console.log() two things:
//     // Tip amount per person
//     // Total amount per person
// }

//calcTipSplit(100,.15,2)


function calcTipSplit(bill, percentage, amountOfPeople) {
// Tip amount per person
// Total amount per person
// Saving all out inputs
bill = parseInt(billInput.value)
percentage = tipPercentage/100
amountOfPeople = parseFloat(people.value)

// Handle the input logic before calculation

// console.log(bill)
// console.log(percentage)
// console.log(tipPercentage)
// 
if(bill && percentage && amountOfPeople) {
    tipAmountPerPerson = (bill * percentage) / amountOfPeople
    //console.log(tipAmountPerPerson+'kk')

    let totalAmountPerPerson = bill/amountOfPeople + tipAmountPerPerson
        console.log(totalAmountPerPerson+'ll')

        // id == tip-amount
        document.getElementById("tip-amount").innerText = "$" + tipAmountPerPerson.toFixed(2)
        // id == total-amount
        document.getElementById("total-amount").innerText = "$" + totalAmountPerPerson.toFixed(2)
}

//Add reference and addeventlistener to reset button
const button = document.getElementById("reset-button")
       button.addEventListener("click", ()=>
{
    reSet()

})


function reSet(){
    document.getElementById("tip-amount").innerText = '$0.00'
 
    document.getElementById("total-amount").innerText = '$0.00'
    document.getElementById("bill-input").value = '0'
    document.getElementById("number-of-people").value = '0'
}

};


themeBtn.addEventListener("click", function() {
    if(darkMode == false) {
        //Change to dark
        darkModeProperties()
    
    } else {
        // Change to light
        lightModeProperties()
    }

})