/*-------------------------------- Constants --------------------------------*/
const resElement = [];
const arr=[];
/*-------------------------------- Variables --------------------------------*/
let num1Element,firstElement,secondElement,thirdElement;    let buttonClicked='';

/*------------------------ Cached Element References ------------------------*/

const buttons = document.querySelectorAll('.button');
const calculator = document.querySelector('#calculator');
const displayElement = document.querySelector('.display');
/*----------------------------- Event Listeners -----------------------------*/

displayElement.textContent=0
buttons.forEach((button) => {
  button.addEventListener('click', (event) => {
    catchedClick(event);
    // Future logic to capture the button's value would go here...
  });
});

calculator.addEventListener('click', (event) => {
  // This log is for testing purposes to verify we're getting the correct value
  // You have to click a button to see this log
  //console.log(event.target.innerText);
  displayElement.textContent=buttonClicked;

  if (buttonClicked.includes("C"))  {

    clearDisplay();

  } else if (buttonClicked.includes("="))  {
    addToArr();
    displayElement.textContent= findResult();
}
});

/*-------------------------------- Functions --------------------------------*/

function catchedClick(event){
  displayElement.textContent=0;
  // This log is for testing purposes to verify we're getting the correct value
  buttonClicked+=event.target.innerText;
  console.log(buttonClicked);
}
function clearDisplay(){
  num1Element='',firstElement='',secondElement='', buttonClicked='';
  displayElement.textContent=0;
}
 function addToArr(){
  num1Element='',firstElement='',secondElement=''//, buttonClicked='';
  //displayElement.textContent=0;
  resElement.pop();
  resElement.push(buttonClicked)
  num1Element = resElement['0'];
 }

 function findResult(){
  if (num1Element.includes("+")){
    const arr = num1Element.split("+");
    firstElement = parseInt(arr[0]);
    secondElement = parseInt(arr[1]);
    thirdElement =firstElement+secondElement;
  //console.log(resElement);
  // console.log(num1Element);
  // console.log(arr);
    num1Element='',firstElement='',secondElement='', buttonClicked='';
    return thirdElement;
  //displayElement.textContent=0;
  } else if (num1Element.includes("-")){
    const arr = num1Element.split("-");
    firstElement = parseInt(arr[0]);
    secondElement = parseInt(arr[1]);
    thirdElement=firstElement-secondElement;
    num1Element='',firstElement='',secondElement='', buttonClicked='';
    return thirdElement;
    // console.log(resElement);
    // console.log(num1Element);
    // console.log(arr);

  }else if (num1Element.includes("/")){
    const arr = num1Element.split("/");
    // console.log(resElement);
    // console.log(num1Element);
    // console.log(arr);
    firstElement = parseInt(arr[0]);
    secondElement = parseInt(arr[1]);
    thirdElement=firstElement/secondElement;
    num1Element='',firstElement='',secondElement='', buttonClicked='';
    return thirdElement;

  } else if (num1Element.includes("*")){
    const arr = num1Element.split("*");
    // console.log(resElement);
    // console.log(num1Element);
    // console.log(arr);
    firstElement = parseInt(arr[0]);
    secondElement = parseInt(arr[1]);
    thirdElement=firstElement*secondElement;
    num1Element='',firstElement='',secondElement='', buttonClicked='';
    return thirdElement;
  }

 }



  