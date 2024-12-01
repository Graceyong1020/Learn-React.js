import "./Header.css";
import { memo } from "react";

const Header = () => {
  return (
    <div className="Header">
      <h3>Today is 🎀</h3>
      <h1>{new Date().toDateString()}</h1>
    </div>
  );
};

export default memo(Header); // Header 컴포넌트를 memo로 감싸서 불필요한 리렌더링을 방지
