const Button = ({text, color,children}) => {
   
    const onClickButton = (e) => {
        console.log(e); //SyntheticEvent(합성이벤트): 통일된 이벤트 객체
        console.log(text);
    }; // event handler

    return (
    <button onClick={onClickButton} 
   // onMouseEnter={onClickButton}
    style={{color: color}}>
    {text}-{color.toUpperCase()}
    {children}
    </button>
    );
};

Button.defaultProps = {
    color: "black",
};
export default Button;