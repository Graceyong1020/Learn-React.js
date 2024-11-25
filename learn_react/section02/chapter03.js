//1. 배열의 구조 분해 할당
let arr = [1, 2, 3];

let [one, two, three, four = 4] = arr;
console.log(one, two, three, four); // 1 2 3

// 2. 객체의 구조 분해 할당
let person = {
    name : 'Grace',
    age : 20,
    hobby : 'coding'
};

let { 
    age: myAge,
    hobby,
    name,
    extra = "hello",
} = person;
console.log(myAge, hobby, name, extra); // 20 coding Grace hello

// 3. 객체 구조 분해 할당을 이용해서 함수의 매개변수를 받는 방법
const func = ({name, age, hobby, extra}) => {
    console.log(name, age, hobby, extra);
};

func(person);