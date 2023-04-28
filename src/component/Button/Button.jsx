import React, { useState, useEffect } from "react";
import { randomElementFunction } from "../../helpers/randomElementFunction";
import { array1 } from "../../arrays/TakeAway1";
import styles from "./Button.module.scss";

const Button = () => {
  // Helper function to get unique random elements for both buttons
  const getUniqueRandomElements = (arr) => {
    const firstRandomElement = randomElementFunction(arr);
    let secondRandomElement = randomElementFunction(arr);

    while (firstRandomElement.randomIndex === secondRandomElement.randomIndex) {
      secondRandomElement = randomElementFunction(arr);
    }

    return {
      firstRandomElement: firstRandomElement.randomElement,
      secondRandomElement: secondRandomElement.randomElement,
    };
  };

  const uniqueRandomElements = getUniqueRandomElements(array1);

  const [arr, setArr] = useState(array1);
  const [button1Label, setButton1Label] = useState(
    uniqueRandomElements.firstRandomElement
  );
  const [button2Label, setButton2Label] = useState(
    uniqueRandomElements.secondRandomElement
  );

  // Helper function to remove displayed elements
  const removeDisplayedElements = (arr, elementsToRemove) => {
    return arr.filter((el) => !elementsToRemove.includes(el));
  };

  // Update the array after setting button labels
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

  return (
    <div className={styles.div}>
      <button
        className={styles.button}
        onClick={() => handleButtonClick(1)}
        disabled={!button1Label}
      >
        {button1Label || "No more options"}
      </button>
      <button
        className={styles.button}
        onClick={() => handleButtonClick(2)}
        disabled={!button2Label}
      >
        {button2Label || "No more options"}
      </button>
    </div>
  );
};

export default Button;
