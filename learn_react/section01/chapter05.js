//1. Number Type
let num1 = 27;
let num2 = 3.14;
let num3 = -10;

console.log(num1 + num2);
console.log(num1 * num3);
console.log(num2 / num3);
console.log(num2 % num3); 


let inf = Infinity;
let mInt = -Infinity;

let nan = NaN; //Not a Number

console.log(1 * "String"); //NaN


//2. String Type
let myName = "Grace";
let myJob = 'programmer';
let introduce = myName + myJob;

//*Template Literal
let introduceText = `${myName} is a ${myJob}`;
console.log(introduceText);

//3. Boolean Type
let isSwitchOn = true;
let isEmpty = false;

//4. Null Type ( 값이 없다 )
let empty = null;

//5. Undefined Type ( 선언은 되었지만 값이 할당되지 않았다 )
let none;
console.log(none);
