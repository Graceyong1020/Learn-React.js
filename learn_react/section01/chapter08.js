//1. null 병합 연산자 -> 존재하는 값 추려내는 기능
// -> null 또는 undefined가 아닌 값 찾아내는 연산자

let var1;
let var2 = 10;
let var3 = 20;

let var4 = var1 ?? var2;
let var5 = var1 ?? var3;
let var6 = var2 ?? var3; // var2가 null 또는 undefined가 아니므로 var2 값이 할당됨

let userName = "Grace";
let nickName = "gracy";

let displayName = userName ?? nickName ;


//2. typeof 연산자 -> 데이터 타입 확인
// ->  값의 타입을 문자열로 반환하는 기능을 하는 연산자

let var7 = 1;
var7 = "Hello";
var7 = true;

let t1 = typeof var7;
console.log(t1); //boolean

//3. 삼항 연산자 -> 항을 3개 사용하는 연산자
// -> 조건식 ? 참일 때 값 : 거짓일 때 값
let var8 = 10;

// 변수 res에 var8 값이 짝수 -> "짝수" 홀수 -> "홀수" 할당
let res = var8 % 2 === 0 ? "짝수" : "홀수";
console.log(res); //짝수