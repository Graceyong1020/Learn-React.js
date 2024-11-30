//JSX 주의사항
//1. 중괄호 내부에는 자바스크립트 표현식만
//2. 숫자, 문자열, 배열 값만 렌더링 가능. 객체는 .map()을 사용하여 렌더링 가능
//3. 모든 태그는 닫아야 함
//4. 최상위 태그는 반드시 하나여야만 함

import "./Main.css"; // css 파일을 import 해줌

const Main = () => {

    const user = {
        name: "Grace",
        isLogin: true,
    };

    if(user.isLogin) {
        return <div className="logout">Logout</div>;
    }else {
        return <div>Login</div>;
    }
    

    /* return (
        <>
        {user.isLogin ? (
            <div>Logout</div>
        ) : (
            <div>Login</div>
        ) }
        </>
    ); */
    
};

export default Main; // 이렇게 해주면 다른 파일에서 import Main from './Main'로 사용 가능