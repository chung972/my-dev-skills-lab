/**
 * We're going to make a Dev Skills App
 * We need for a user to tpye in a dev skill
 * Then we will get the value of the skill
 * We need to add functionality to the button to retrieve user input
 * We will build a DOM element using that value
 * Then we will add that element to the DOM
 */

// State Variables
let $inputVal, $skillElem

// Event Listeners
$("button").on("click", getInputText);

// Functions
function getInputText(){
    $inputVal = $("input").val();
    // here, .val() is a GETTER
    $("input").val("");     
    // here, .val("") acts as a SETTER because we pass in an empty string
    createElem($inputVal);
}

function createElem(str){
    $skillElem = $(`<li>${str}</li>`);
    addSkill($skillElem);
}

function addSkill(elem){
    $("section ul").append(elem);
}