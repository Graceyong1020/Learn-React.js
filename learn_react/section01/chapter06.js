// 1. 묵시적 형 변환
// -> 자바스크립트 엔진이 암묵적으로 데이터 타입을 변환하는 것


let num = 10;
let str = "20";

const result = num + str;
console.log(result); //1020 

//2. 명시적 형 변환
// -> 프로그래머 내장함수 이용해 데이터 타입을 변환하는 것
// -> 문자열 -> 숫자
let str1 = "100";
let strToNum1 = Number(str1);
console.log(strToNum1);

// 숫자 + 문자 -> 숫자
let str2 = "10개";
let strToNum2 = parseInt(str2);
console.log(strToNum2);

// 숫자 -> 문자열
let num1 = 100;
let numToStr1 = String(num1);
console.log(numToStr1 + "입니다");