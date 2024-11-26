//function add(a,b, callback){
    //setTimeout(() => {
      //  const sum = a + b;
      //  console.log(sum);

  //  }, 1000);
//}

//add(1,2, (value) => {
  //  console.log(value);
//});


// 음식 주문 예제
function orderFood(callback) {
    setTimeout(() => {
        const food = "Rice";
        callback(food);
}, 1000);
}

function cooldownFood(food, callback) {
    setTimeout(() => {
        const cooldownedFood = 'Cold ${food}';
        callback(cooldownedFood);
    }, 2000);
}

function freezeFood(food, callback) {
    setTimeout(() => {
        const freezedFood = 'Frozen ${food}';
        callback(freezedFood);
    }, 3000);
}

orderFood((food) => {
    console.log(food);

    cooldownFood(food, (cooldownedFood) => {
        console.log(cooldownedFood);

        freezeFood(cooldownedFood, (freezedFood) => {
            console.log(freezedFood);
        });
    }); 
}); // Rice -> Cold Rice -> Frozen Cold Rice
