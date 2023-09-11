import styles from "./Buttons.module.css";

function Button(props) {
  const { isOutline, icon, text, ...rest } = props;
  return (
    <>
      <button
        {...rest}
        className={isOutline ? styles.outlinebtn : styles.primarybtn}
      >
        {icon}
        {text}
      </button>
    </>
  );
}

export default Button;
