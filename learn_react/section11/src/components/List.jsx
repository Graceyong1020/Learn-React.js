import "./List.css";
import TodoItem from "./TodoItem";
import { useState, useMemo, useContext } from "react";
import { TodoStateContext } from "../App";

const List = () => {
  const todos = useContext(TodoStateContext);
  const [search, setSearch] = useState("");

  const onChangeSearch = (e) => {
    setSearch(e.target.value);
  };

  const getFilteredData = () => {
    // add getFilteredData function: filter todos based on search
    if (search === "") {
      return todos;
    }
    return todos.filter(
      (todo) => todo.content.toLowerCase().includes(search.toLowerCase()) // 대소문자 구분 없이 검색
    );
  };

  const filteredTodos = getFilteredData();

  // memoization 사용
  const { totalCount, doneCount, notDoneCount } = useMemo(() => {
    const totalCount = todos.length; // 전체 todo 개수
    const doneCount = todos.filter((todo) => todo.isDone).length; // 완료된 todo 개수
    const notDoneCount = totalCount - doneCount; // 완료되지 않은 todo 개수

    return {
      totalCount,
      doneCount,
      notDoneCount,
    };
  }, [todos]);
  //의존성 배열: deps에 있는 값이 변경될 때만 함수를 실행
  //첫번째 인수는 memoized 하고 싶은 함수, 두번째 인수는 의존성 배열

  // List 컴포넌트에서 getAnalyzedData 함수를 호출하여 분석 데이터를 가져온 후, 이를 화면에 출력
  // const { totalCount, doneCount, notDoneCount } = getAnalyzedData();

  return (
    <div className="List">
      <h4>Todo List 🐥</h4>
      <div>
        <div>total: {totalCount}</div>
        <div>done: {doneCount}</div>
        <div>not done: {notDoneCount}</div>
      </div>
      <input value={search} onChange={onChangeSearch} placeholder="Search..." />
      <div className="todos_wrapper">
        {filteredTodos.map((todo) => {
          return <TodoItem key={todo.id} {...todo} />;
        })}
      </div>
    </div>
  );
};
export default List;
