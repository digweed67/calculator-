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

