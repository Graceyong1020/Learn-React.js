//Promise: 비동기 작업을 효율적으로 ㅓ리할 수 있도록 도와주는 자바스크립트 내장 객체
// pending: 대기 상태
// fulfilled: 성공 상태 -> resolve 호출
// rejected: 실패 상태 -> reject 호출

function add10(num){
    const promise = new Promise((resolve, reject) => {
        // 비동기 작업 실행하는 함수 (executor)
    
        setTimeout(() => {
            const num = null;
    
            if (typeof num === "number") {
                resolve(num + 10);
            } else {
                reject("숫자가 아닙니다.");
            }
        }, 2000);
    });
    return promise;
}

add10(0)
 .then((result) =>{
    console.log(result);
    return add10(result);
})
.then((result) => {
    console.log(result);

    return add10(result);
})
.then((result) => {
    console.log(result);
})
.catch((error) => {
    console.log(error);
}); 



//then 메서드: 비동기 작업이 성공적으로 수행된 경우, 실패한 경우에 대한 처리를 등록
//promise.then((value)=>{
  //  console.log(value); // 20
//}).catch((error) => {
  //  console.log(error);
//}); // prmise chaining