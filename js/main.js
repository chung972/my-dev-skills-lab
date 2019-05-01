/**
 * We're going to make a Dev Skills App
 * We need for a user to tpye in a dev skill
 * Then we will get the value of the skill
 * We need to add functionality to the button to retrieve user input
 * We will build a DOM element using that value
 * Then we will add that element to the DOM
 */

// State Variables
let $inputVal = $("input");

// Event Listeners
$("button").on("click", getInputText);

// Functions
function getInputText(){
    alert("button pushed");
}