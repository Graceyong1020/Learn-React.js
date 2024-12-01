import "./App.css";
import Header from "./components/Header";
import List from "./components/List";
import Editor from "./components/Editor";
import {
  useState,
  useRef,
  useReducer,
  useCallback,
  createContext,
  useMemo,
  memo,
} from "react";

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
        item.id === action.targetId ? { ...item, isDone: !item.isDone } : item
      );
    case "DELETE":
      return state.filter((item) => item.id !== action.targetId);
    default:
      return state;
  }
}

export const TodoStateContext = createContext();
export const TodoDispatchContext = createContext();

function App() {
  const [todos, dispatch] = useReducer(reducer, mockData);
  const idRef = useRef(3);

  // callback 함수로 변경: 불필요한 리렌더링 방지
  const onCreate = useCallback((content) => {
    dispatch({
      type: "CREATE",
      data: {
        id: idRef.current++,
        isDone: false,
        content: content,
        date: new Date().getTime(),
      },
    });
  }, []);

  // callback 함수로 변경: 불필요한 리렌더링 방지
  const onUpdate = useCallback((targetId) => {
    dispatch({
      type: "UPDATE",
      targetId: targetId,
    });
  }, []);

  // callback 함수로 변경: 불필요한 리렌더링 방지
  const onDelete = useCallback((targetId) => {
    dispatch({
      type: "DELETE",
      targetId: targetId,
    });
  }, []);

  const memoizedDispatch = useMemo(() => {
    return { onCreate, onUpdate, onDelete };
  }, []);

  return (
    <div className="App">
      <Header />
      <TodoStateContext.Provider value={todos}>
        <TodoDispatchContext.Provider value={memoizedDispatch}>
          <Editor />
          <List />
        </TodoDispatchContext.Provider>
      </TodoStateContext.Provider>
    </div>
  );
} // todoContext.Provider: 자식 컴포넌트에게 value를 전달하는 역할
// value: 전달할 데이터 객체

export default App;
