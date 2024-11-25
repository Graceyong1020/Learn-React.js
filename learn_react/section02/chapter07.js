// 6가지 요소 조작 메서드

//1. push : 배열의 맨 뒤에 요소 추가
let arr1 = [1,2,3];
const newLength = arr1.push(4, 5, 6);

//2. pop : 배열의 맨 뒤 요소 제거
let arr2 = [1,2,3];
const popedItem = arr2.pop();

// console.log(popedItem);
// console.log(arr2);

//3. shift : 배열의 맨 앞 요소 제거
let arr3 = [1,2,3];
const shiftedItem = arr3.shift();
// console.log(shiftedItem, arr3);

//4. unshift : 배열의 맨 앞에 요소 추가
let arr4 = [1,2,3];
const newLength2 = arr4.unshift(0);
// console.log(newLength2, arr4);

//5. splice : 배열의 특정 위치에 요소 추가, 제거
let arr5 = [1,2,3,4,5];
let spliced = arr5.splice(2, 5); // 2번 인덱스부터 5개 제거
let sliced2 = arr5.slice(2);
let sliced3 = arr5.slice(-3);

// 6. concat : 배열을 합쳐줌
let arr6 = [1,2];
let arr7 = [3,4];

let concated = arr6.concat(arr7);
console.log(concated);

