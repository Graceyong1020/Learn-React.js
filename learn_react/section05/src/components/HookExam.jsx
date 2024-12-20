//3가지 hook 기능
//1. 함수 컴포넌트, 커스텀 훅 내부에서만 호출 가능
//2. 조건부로 호출 불가능
//3. 나만의 훅(커스텀 훅)을 만들 수 있음( use로 시작하는 함수)

import useInput from "./../hooks/useInput";

const HookExam = () => {
  const [input, onChange] = useInput();

  return (
    <div>
      <input value={input} onChange={onChange} />
    </div>
  );
};
export default HookExam;
