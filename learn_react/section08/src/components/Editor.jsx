import "./Editor.css";
import { useState, useRef } from "react";

const Editor = ({ onCreate }) => {
  const [content, setContent] = useState("");
  const contentRef = useRef();

  const onChangeContent = (e) => {
    setContent(e.target.value);
  };

  const onSubmit = () => {
    if (content === "") {
      // if content is empty, focus on the input element
      contentRef.current.focus();
      return;
    }
    onCreate(content);
    setContent(""); // clear input
  };

  const onKeydown = (e) => {
    // add onKeydown event
    if (e.key === 13) {
      onSubmit();
    }
  };

  return (
    <div className="Editor">
      <input
        ref={contentRef}
        value={content}
        onKeyDown={onKeydown} // add onKeyDown event
        onChange={onChangeContent}
        placeholder="new Todo..."
      />
      <button onClick={onSubmit}>Add</button>
    </div>
  );
};
export default Editor;
