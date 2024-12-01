import { useReducer } from "react";

// reducer 함수: 현재 상태와 action을 받아서 새로운 상태를 반환하는 함수
function reducer(state, action) {
  console.log(state, action);
  /* if (action.type === "INCREASE") {
    // + 버튼을 클릭했을 때
    return state + action.data; // state를 1 증가시킨다.
  } else if (action.type === "DECREASE") {
    // - 버튼을 클릭했을 때
    return state - action.data; // state를 1 감소시킨다.
  } */

  // switch문으로 변경
  switch (action.type) {
    case "INCREASE":
      return state + action.data;
    case "DECREASE":
      return state - action.data;
    default:
      return state;
  }
}

const Exam = () => {
  const [state, dispatch] = useReducer(reducer, 0);
  // dispatch: action을 발생시키는 함수

  const onClickPlus = () => {
    // 인수: 상태가 어떻게 변경될지 명시하는 action
    //action 객체를 dispatch 함수에 전달
    dispatch({
      type: "INCREASE",
      data: 1, // action에 포함될 데이터
    });
  };

  const onClickMinus = () => {
    dispatch({
      type: "DECREASE",
      data: 1,
    });
  };

  return (
    <div>
      <h1>{state}</h1>
      <button onClick={onClickPlus}>+</button>
      <button onClick={onClickMinus}>-</button>
    </div>
  );
};
export default Exam;
