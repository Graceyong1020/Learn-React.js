import "./App.css";
import Viewer from "./components/Viewer";
import Controller from "./components/Controller";
import { useState, useEffect, useRef } from "react";
import Even from "./components/Even";

function App() {
  const [count, setCount] = useState(0);
  const [input, setInput] = useState("");

  const isMount = useRef(false);

  // 1. mount: 초기 렌더링 시 실행
  useEffect(() => {
    console.log("mount");
  }, []);

  // 2. update: 컴포넌트가 업데이트 될 때마다 실행
  useEffect(() => {
    if (!isMount.current) {
      isMount.current = true;
      return;
    }
    console.log("update");
  });

  // 3. unmount: 컴포넌트가 제거될 때 실행

  /* useEffect(() => { // 원하는 값이 변경될 때만 실행하고 싶을 때 useEffect의 두 번째 인자로 의존성 배열(dependency array)을 넣어준다.
    console.log(`count: ${count}/ input: ${input}`);
  }, [count, input]);
  //의존성 배열(dependency array)에 count를 넣어주면 count가 변경될 때만 useEffect가 실행된다.
  //변경된 state를 사용하고 싶을 때 useEffect를 사용 */

  const onClickButton = (value) => {
    setCount(count + value);
  };

  return (
    <div className="App">
      <h1>Simple Counter</h1>
      <section>
        <input
          value={input}
          onChange={(e) => {
            setInput(e.target.value);
          }}
        />
      </section>
      <section>
        <Viewer count={count} />
        {count % 2 === 0 ? <Even /> : null}
      </section>
      <section>
        <Controller onClickButton={onClickButton} />
      </section>
    </div>
  );
}

export default App;
