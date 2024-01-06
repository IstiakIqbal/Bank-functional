//Get value from input
function getInputValueById(inputId){
    const inputField = document.getElementById(inputId);
    const inputFieldText = inputField.value;
    const inputFieldValue = parseFloat(inputFieldText);
    inputField.value = '';
    return inputFieldValue;
}
//Get value from html text
function getTextElementById(inputId){
    const inputField = document.getElementById(inputId);
    const inputFieldText = inputField.innerText;
    const inputFieldValue = parseFloat(inputFieldText);
    return inputFieldValue;
}
//Set the value by Id
function setElementbyId(inputId, newValue){
    const element = document.getElementById(inputId);
    element.innerText = newValue;
}
