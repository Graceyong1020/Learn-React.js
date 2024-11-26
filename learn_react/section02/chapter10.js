//1. Date 객체 생성 
let date1 = new Date(); // 생성자
//console.log(date1);

let date2 = new Date("1997-07-01"); // 문자열
//console.log(date2);

// 2. 타임 스탬프
// 1970년 1월 1일 00:00:00 UTC(세계 표준시)로부터 경과한 시간을 밀리초 단위로 나타낸 정수
let ts1 = date1.getTime();
//console.log(ts1);

let date4 = new Date(ts1);

//console.log(date1, date4);

// 3. 시간 요소들 추출하는 방법
let year = date1.getFullYear();
let month = date1.getMonth()+1; // 0부터 시작하기 때문에 1을 더해줌
let date = date1.getDate();

let hours = date1.getHours();
let minutes = date1.getMinutes();
let seconds = date1.getSeconds();

//console.log(year, month, date, hours, minutes, seconds);

// 4. 시간 수정하기
date1.setFullYear(2023);
date1.setMonth(11); // 0부터 시작하기 때문에 11은 12월
date1.setDate(25);
date1.setHours(12);
date1.setMinutes(30);
date1.setSeconds(30);

//console.log(date1);

// 5. 시간을 여러 포맷으로 출력하기
console.log(date1.toDateString());
console.log(date1.toLocaleString());