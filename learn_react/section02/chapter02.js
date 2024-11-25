function returnFalse() {
    console.log('returnFalse');
  return false;
}

function returnTrue() {
    console.log('returnTrue');
  return true;
}

console.log(returnFalse() && returnTrue()); // 단락 평가 결과 false
console.log(returnTrue() && returnFalse()); // 단락 평가 작동 안함
console.log(returnFalse() || returnTrue()); // 결과 true


//단락 평가 활용 사례
function printName(person) {
    const name = person && person.name;
    console.log(name || "person이 없습니다.");
}

printName();
printName({name: "Grace"}); 

// T || T => 첫 번째 T
// T && T => 두 번째 T