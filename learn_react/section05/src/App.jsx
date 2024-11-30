import "./App.css";
import { useState } from "react"; // useState를 사용하기 위해 import 해줌

import Register from "./components/Register";
import HookExam from "./components/HookExam";

function App() {
  return (
    <>
      {/* <Register /> */}
      <HookExam />
    </>
  );
}

export default App;
