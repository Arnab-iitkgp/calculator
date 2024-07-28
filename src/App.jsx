import styles from "./App.module.css";
import Display from "./components/Display.jsx";
import ButtonsC from "./components/ButtonsC.jsx";
import { useState } from "react";

function App() {
  const [calVal, setCalVal] = useState("");
  const onBtnClick = (btntext) => {
    if (btntext === "C") {
      setCalVal("");
    } else if (btntext === "=") {
      const result = eval(calVal);
      setCalVal(result);
    } else {
      const newCalVal = calVal + btntext;
      setCalVal(newCalVal);
    }
    // console.log(btntext);
  };
  return (
    <center>
      <h1>CALCULATOR</h1>
      <div className={styles.calculator}>
        <Display calVal={calVal}></Display>
        <ButtonsC onBtnClick={onBtnClick}></ButtonsC>
      </div>
    </center>
  );
}

export default App;
