import "./App.css";
import Header from "./components/Header";
import List from "./components/List";
import Editor from "./components/Editor";
import { useState, useRef, useReducer } from "react";

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

function reducer(state, action) {
  switch (action.type) {
    case "CREATE":
      return [action.data, ...state];
    case "UPDATE":
      return state.map((item) =>
        item.id === action.targetId ? { ...item, isDone: !item.isDOne } : item
      );
    case "DELETE":
      return state.filter((item) => item.id !== action.targetId);
    default:
      return state;
  }
}

function App() {
  const [todos, dispatch] = useReducer(reducer, mockData);
  const idRef = useRef(3);

  const onCreate = (content) => {
    dispatch({
      type: "CREATE",
      data: {
        id: idRef.current++,
        isDone: false,
        content: content,
        date: new Date().getTime(),
      },
    });
  };

  const onUpdate = (targetId) => {
    dispatch({
      type: "UPDATE",
      targetId: targetId,
    });
  };

  const onDelete = (targetId) => {
    dispatch({
      type: "DELETE",
      targetId: targetId,
    });
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