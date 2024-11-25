// 1. Falsy value
let f1 = undefined;
let f2 = null;
let f3 = 0;
let f4 = '';
let f5 = NaN;
let f6 = -0;
let f7 = On;

// 2. Truthy value
// falsy value를 제외한 모든 값은 truthy value이다.
let t1 = {};
let t2 = [];
let t3 = "hello";
let t4 = 3;
let t5 = -1;
let t6 = () => {};

// 3. 활용 사례 

function printName(person) {
if (!person){
    console.log('person이 없습니다.');
    return;

}
console.log(person.name); // person.name이 없을 경우 에러 발생

} 

let person = { name: "Grace"};
printName(person); // Grace