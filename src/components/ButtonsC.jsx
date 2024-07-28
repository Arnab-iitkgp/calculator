import styles from "./ButtonsC.module.css";
const ButtonsC = function ({ onBtnClick }) {
  const buttonsname = [
    "C",
    "1",
    "2",
    "+",
    "3",
    "4",
    "-",
    "5",
    "6",
    "*",
    "7",
    "8",
    "/",
    "=",
    "9",
    "0",
    ".",
  ];
  return (
    <div className={styles.buttonsC}>
      {buttonsname.map((btn) => (
        <button className={styles.button} onClick={() => onBtnClick(btn)}>
          {btn}
        </button>
      ))}
    </div>
  );
};

export default ButtonsC;
