import React, { useState, useEffect } from "react";
import { randomElementFunction } from "../../helpers/randomElementFunction";
import styles from "./Button.module.scss";
import {
  getUniqueRandomElements,
  removeDisplayedElements,
} from "../../helpers/buttonHelpers";
import InitialButton from "../InitialButton/InitialButton";

const Button = ({ initialLabel, array }) => {
  const uniqueRandomElements = getUniqueRandomElements(array);

  const [arr, setArr] = useState(array);
  const [button1Label, setButton1Label] = useState(
    uniqueRandomElements.firstRandomElement
  );
  const [button2Label, setButton2Label] = useState(
    uniqueRandomElements.secondRandomElement
  );

  const [showOptions, setShowOptions] = useState(false);

  useEffect(() => {
    setArr((prevArr) =>
      removeDisplayedElements(prevArr, [button1Label, button2Label])
    );
  }, [button1Label, button2Label]);

  const handleButtonClick = (buttonNumber) => {
    let newButton1Label, newButton2Label, newRandomIndex;
    const filteredArr = removeDisplayedElements(arr, [
      button1Label,
      button2Label,
    ]);

    if (buttonNumber === 1) {
      newRandomIndex = randomElementFunction(filteredArr).randomIndex;
      newButton1Label = button1Label;
      newButton2Label = filteredArr[newRandomIndex];
    } else if (buttonNumber === 2) {
      newRandomIndex = randomElementFunction(filteredArr).randomIndex;
      newButton1Label = filteredArr[newRandomIndex];
      newButton2Label = button2Label;
    }

    setArr((prevArr) =>
      removeDisplayedElements(prevArr, [button1Label, button2Label])
    );
    setButton1Label(newButton1Label);
    setButton2Label(newButton2Label);
  };

  const handleInitialButtonClick = () => {
    setShowOptions(true);
  };

  return (
    <div className={styles.div}>
      {!showOptions && (
        <InitialButton
          initialLabel={initialLabel}
          onClick={handleInitialButtonClick}
        />
      )}
      {showOptions && (
        <div className={styles.div__buttons}>
          <button
            className={styles.div__buttons_option}
            onClick={() => handleButtonClick(1)}
            disabled={!button1Label}
          >
            {button1Label || "No more options"}
          </button>
          <button
            className={styles.div__buttons_option}
            onClick={() => handleButtonClick(2)}
            disabled={!button2Label}
          >
            {button2Label || "No more options"}
          </button>
        </div>
      )}
    </div>
  );
};

export default Button;
