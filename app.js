/*-------------------------------- Constants --------------------------------*/
const buttons = document.querySelectorAll('.button');
const calculator = document.querySelector('#calculator');
const displayElement = document.querySelector('.display');
/*-------------------------------- Variables --------------------------------*/
let num1Element, num2Element, operationElement;
/*------------------------ Cached Element References ------------------------*/
buttons.forEach((button) => {
    button.addEventListener('click', (event) => {
      // This log is for testing purposes to verify we're getting the correct value
      console.log(event.target.innerText);
      // Future logic to capture the button's value would go here...
      num1Element=event.target.innerText;

      if (event.target.innerText ==='C' || event.target.innerText ==='=' ){
        displayElement.textContent="";

    } else {
        num1Element=button;
        displayElement.textContent+=event.target.innerText;
    }
    });
   // num2Element.push(displayElement);

  });

/*----------------------------- Event Listeners -----------------------------*/

/*-------------------------------- Functions --------------------------------*/
calculator.addEventListener('click', (event) => {
    // This log is for testing purposes to verify we're getting the correct value
    // You have to click a button to see this log
 //   console.log(event.target.innerText);
   
  
    // Example
    if (event.target.classList.contains('number')) {
       // num1Element=event.target.innerText;
       


      // Do something with a number
      num1Element=event.target.innerText;
    }
  
    // Example
    if (event.target.innerText === '*') {
      // Do something with this operator
    } else if (event.target.innerText === '/'){

    } else if (event.target.innerText === '+'){

    }else {

    }
  });
   