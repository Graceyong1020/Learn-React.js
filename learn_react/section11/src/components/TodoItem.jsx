import "./TodoItem.css";
import { memo, useContext } from "react";
import { TodoDispatchContext } from "../App";

const TodoItem = ({ id, isDone, content, date }) => {
  const { onUpdate, onDelete } = useContext(TodoDispatchContext);
  const onChangeCheckbox = () => {
    onUpdate(id);
  };

  const onClickDeleteButton = () => {
    onDelete(id);
  };

  return (
    <div className="TodoItem">
      <input
        onChange={onChangeCheckbox}
        readOnly
        checked={isDone}
        type="checkbox"
      />
      <div className="content">{content}</div>
      <div className="date">{new Date(date).toLocaleDateString()}</div>
      <button onClick={onClickDeleteButton}>Delete</button>
    </div>
  );
};

// 고차 컴포넌트(HOC)
/* export default memo(TodoItem, (prevProps, nextProps) => {
  //반환값에 따라, props가 변경되었는지 여부를 결정
  //true를 반환하면 리렌더링을 하지 않음
  //false를 반환하면 리렌더링을 함
  if (prevProps.id !== nextProps.id) {
    return false;
  }
  if (prevProps.isDone !== nextProps.isDone) {
    return false;
  }
  if (prevProps.content !== nextProps.content) {
    return false;
  }
  if (prevProps.date !== nextProps.date) {
    return false;
  }
  return true;
});  */ // 콜백함수를 두번째 인자로 전달하여 불필요한 리렌더링을 방지

export default memo(TodoItem); // TodoItem 컴포넌트를 memo로 감싸서 불필요한 리렌더링을 방지
