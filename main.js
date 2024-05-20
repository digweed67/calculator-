const add = function (a, b) {
  let result = a + b;
  if (result.toString().includes(".") && result.toString().split(".")[1].length > 4) {
    result = parseFloat(result.toFixed(4)); 
   }
   return result; 
};


const subtract = function (a, b) {
  let result = a - b;
  if (result.toString().includes(".") && result.toString().split(".")[1].length > 4) {
    result = parseFloat(result.toFixed(4)); 
   }
   return result;
};



const multiply = function (a,b) {
  let result = a * b; 
  if (result.toString().includes(".") && result.toString().split(".")[1].length > 4) {
    result = parseFloat(result.toFixed(4)); 
   }
   return result;

}; 



const divide = function (a,b) {
  if(b === 0) {
    return document.querySelector(".display").textContent = "Nope";
  } else {
     let result = a / b;
     if (result.toString().includes(".") && result.toString().split(".")[1].length > 4) {
      result = parseFloat(result.toFixed(4)); 
     }
     return result; 
  }

}





function operate (num1, op, num2){
  num1 = parseFloat(firstNumber); 
  num2 = parseFloat(secondNumber); 
  op = operator;

  if(op === "+") {
    return document.querySelector(".display").textContent = add (num1, num2);
  }
  if(op === "-") {
    return document.querySelector(".display").textContent = subtract(num1, num2);
  }
  if(op === "*") {
    return document.querySelector(".display").textContent = multiply(num1, num2);
  }
  if(op === "/") {
    return document.querySelector(".display").textContent = divide(num1, num2);
  } else {
    return "Error"; 
  }
} 

let operands = document.querySelectorAll(".operand");

operands.forEach(operand => operand.addEventListener("click", displayValue));

let firstNumber = ""; 
let operator = ""; 
let secondNumber = ""; 
 


function displayValue(e) {
  if (e.target && e.target.value) {
    let value = e.target.value;

    if(operator === "") {
      if (firstNumber.length >= 9) {
      firstNumber = firstNumber.slice(0, 8);
      document.querySelector(".display").textContent = firstNumber;
      
      } else {
        firstNumber = (firstNumber === "")? value : firstNumber + value; 
        document.querySelector(".display").textContent = firstNumber;
      }
    } else if(operator !== "") {
        if (secondNumber.length >= 9) {
          secondNumber = secondNumber.slice(0, 8)
          document.querySelector(".display").textContent = secondNumber; 
      } else {
        secondNumber = (secondNumber === "")? value : secondNumber + value; 
        document.querySelector(".display").textContent = secondNumber;
      }
    
    } 
         
  } 

}

let operators = document.querySelectorAll (".operator"); 

operators.forEach(operator => operator.addEventListener("click", selectedOperator)); 

function selectedOperator (e) {
  if (e.target && e.target.value) {
    operator = e.target.value;
    return operator; 
  }   
};


const equals = document.querySelector(".equals"); 

equals.addEventListener("click", operate); 

// still to do:   remove the second displayed Value after the result is shown, make sure it calculates pairs of numbers (one operation at a time) 

const clear = document.querySelector(".clear");
clear.addEventListener("click", clearDisplay); 

function clearDisplay (e) {
  document.querySelector(".display").textContent = "0";
  firstNumber = ""; 
  operator = ""; 
  secondNumber = "";
  
  
}
 
const decimal = document.querySelector(".decimal"); 
decimal.addEventListener("click", displayValue);

