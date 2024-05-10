const add = function (a, b) {
  return a + b;
};


const subtract = function (a, b) {
  return a - b;
};



const multiply = function (a,b) {
  return a * b; 
}; 



const divide = function (a,b) {
  if(b === 0) {
    return "Error";
  } else {
     return a / b;
  }

}





function operate (num1, op, num2){
  if(op === "+") {
    return add(num1, num2); 
  }
  if(op === "-") {
    return subtract(num1, num2);
  }
  if(op === "*") {
    return multiply(num1, num2);
  }
  if(op === "/") {
    return divide(num1, num2);
  } else {
    return "Error"; 
  }
} 

let operands = document.querySelectorAll(".operand");

operands.forEach(operand => operand.addEventListener("click", displayValue));

let inputString = ""; 

function displayValue(e) {
  if (e.target && e.target.value) {
      inputString += e.target.value;
      document.querySelector(".display").textContent = inputString;
      return inputString
  } 
}



let operators = document.querySelectorAll (".operator"); 

operators.forEach(operator => operator.addEventListener("click", saveOperator)); 

function saveOperator (e) {
  if (e.target && e.target.value) {
    let selectedOperator = e.target.value;
    console.log(selectedOperator); 
  }   
};