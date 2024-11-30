import { useState, useRef } from "react";

// 회원가입 폼
// 이름, 생년월일, 국적, 자기소개

// input 상태 관리
const Register = () => {
  const [input, setInput] = useState({
    name: "",
    birth: "",
    country: "",
    bio: "",
  });

  const countRef = useRef(0);
  const inputRef = useRef();

  // 통합 관리
  const onChange = (e) => {
    countRef.current++;
    console.log(countRef.current);
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
  };

  const onSubmit = () => {
    if (input.name === "") {
      //이름을 입력하는 DOM에 포커스를 준다.
      inputRef.current.focus();
    }
  };

  return (
    <div>
      <div>
        <input
          ref={inputRef}
          name="name"
          value={input.name}
          onChange={onChange}
          placeholder={"name"}
        />
      </div>

      <div>
        <input
          name="birht"
          value={input.birth}
          onChange={onChange}
          type="date"
        />
      </div>

      <div>
        <select name="country" value={input.country} onChange={onChange}>
          <option></option>
          <option value="korea">대한민국</option>
          <option value="usa">미국</option>
          <option value="japan">일본</option>
        </select>
      </div>

      <div>
        <textarea name="bio" value={input.bio} onChange={onChange} />
      </div>
      <div>
        <button onClick={onSubmit}>submit</button>
      </div>
    </div>
  );
};

export default Register;
