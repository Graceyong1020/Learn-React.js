import "./App.css";
import Header from "./components/Header";
import List from "./components/List";
import Editor from "./components/Editor";
import { useState, useRef } from "react";

const mockData = [
  {
    id: 0,
    isDone: false,
    content: "Learn React",
    date: new Date().getTime(),
  },
  {
    id: 1,
    isDone: true,
    content: "Study English",
    date: new Date().getTime(),
  },
  {
    id: 2,
    isDone: false,
    content: "Go to the gym",
    date: new Date().getTime(),
  },
];

function App() {
  const [todos, setTodos] = useState(mockData);
  const idRef = useRef(3);

  const onCreate = (content) => {
    const newTodo = {
      id: idRef.current++,
      isDone: false,
      content: content,
      date: new Date().getTime(),
    };
    setTodos([newTodo, ...todos]);
  };

  const onUpdate = (targetId) => {
    // targetId를 받아서 해당 요소의 isDone 값을 변경
    // todos State에서 targetId를 가진 요소를 찾아서 isDone 값을 변경

    //todos 배열에서 targetId와 일치하는 id를 갖는 요소의 데이터만 바꾼 새로운 배열을 생성
    setTodos(
      todos.map((todo) =>
        todo.id === targetId ? { ...todo, isDone: !todo.isDone } : todo
      )
    );
  };

  const onDelete = (targetId) => {
    // add onDelete function
    //todos 배열에서 targetId와 일치하는 id를 갖는 요소를 제외한 새로운 배열을 생성
    setTodos(todos.filter((todo) => todo.id === targetId));
  };

  return (
    <>
      <div className="App">
        <Header />
        <Editor onCreate={onCreate} />
        <List todos={todos} onUpdate={onUpdate} onDelete={onDelete} />
      </div>
    </>
  );
}

export default App;
