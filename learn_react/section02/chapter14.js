//async: 어떤 함수를 비동기 함수로 만들어줄 때 사용
// 함수가 프로미스를 반환하도록 변환

async function getData() {
    return {
        name: "Grace",
        age: 20
    };
}

console.log(getData());

// await: async 함수 내부에서만 사용 가능
// 프로미스가 처리될 때까지 기다렸다가 결과를 반환
// 비동기 함수가 다 처리되기를 기다림

async function printData() {
    const data = await getData()
    console.log(data);
}

printData();