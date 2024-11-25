//5가지 요소 순회 및 탐색 메서드
//1. forEach : 모든 요소 순회하면서, 각각의 요소에 특정 동작을 수행
let arr1 = [1,2,3];

arr1.forEach(function (item, index, array) {
    // console.log(idx, item * 2);
});

let doubleArr = [];

arr1.forEach((item) =>  {
    doubleArr.push(item * 2);
});

//2. includes : 배열에 특정 요소가 포함되어 있는지 확인
let arr2 = [1,2,3,4,5];
let isInclude = arr2.includes(3);

// 3. indexOf : 배열에 특정 요소가 몇 번째 인덱스에 있는지 확인
let arr3 = [1,2,3,4,5];
let idx = arr3.indexOf(3);
//console.log(idx);
// 존재하지 않는 요소를 찾을 경우 -1 반환

// 4. findIndex
// 모든 요소 순회함녀서, 콜백함수의 조건을 만족하는 첫 번째 요소의 인덱스 반환
let arr4 = [1,2,3,4,5];
const findedIndex = arr4.findIndex((item) => item % 2 !== 0);

console.log(findedIndex);

// 5. find : 모든 요소 순회하면서, 콜백함수의 조건을 만족하는 요소를 그대로 반환

let arr5 = [
    { name : "Grace"},
    { name : "Jenny"},
    { name : "Ella"},
];

const finded = arr5.find(
    (item) => item.name === "Jenny"
);

console.log(finded);

