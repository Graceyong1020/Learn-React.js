// 5가지 배열 변형 메서드
// 1. filter
// 기존 배열에서 조건을 만족하는 요소들만 필터링하여 새로운 배열을 반환

let arr1 = [
    { name : "Grace", age : 20},
    { name : "Jenny", age : 20},
    { name : "Ella", age : 20},
];

const twenties = arr1.filter(item0 => {
    if(item.age === 20) return true;
});

console.log(twenties);

// 2. map
// 배열의 모든 요소에 대해 주어진 콜백함수를 호출한 결과를 모아 새로운 배열을 반환
let arr2 = [1,2,3,4,5];
const mapResult1 = arr2.map((item, idx, arr) => {

    return item * 2;
});

//console.log(mapResult1);

let names = arr1.map((item) => item.name);
//console.log(names);

// 3. sort
// 배열의 요소를 정렬한 후 그 배열을 반환
let arr3 = ["banana", "apple", "orange"];
arr3.sort();

//console.log(arr3);

// sort 메서드는 숫자의 대소 비교 정렬이 아닌 문자열 비교 정렬을 수행
// 숫자의 대소 비교 정렬을 하려면 콜백함수를 사용해야 함
// a - b : 오름차순 정렬
let arr4 = [1, 10, 2, 20];
arr4.sort((a,b) => {
    if (a >b) {
        // b가 a보다 앞에 위치해야 하는 경우
        return 1; 
    } else if (a < b) {
        // a가 b보다 앞에 위치해야 하는 경우
        return -1;
    } else {
        // a와 b의 순서를 바꿀 필요가 없는 경우
        return 0;
    }
});

console.log(arr4);

// 4. toSorted 
// 배열의 요소를 정렬한 후 그 배열을 반환
let arr5 =["c", "a", "b"];
const sorted = arr5.toSorted();

//console.log(sorted);

// 5. join
// 배열의 모든 요소를 연결해 하나의 문자열로 반환
let arr6 = ["hi", "i", "am", "grace"];
const joined = arr6.join(" ");
//console.log(joined);
