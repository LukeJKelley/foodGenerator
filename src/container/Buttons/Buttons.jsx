import React from "react";
import Button from "../../component/button/Button";
import { takeAway } from "../../arrays/TakeAway";
import { PlacesToGo } from "../../arrays/PlacesToGo";
import { Cooking } from "../../arrays/Cooking";
import { DateIdeas } from "../../arrays/DateIdeas";
import styles from "./Buttons.module.scss";

export const Buttons = () => {
  return (
    <div className={styles.Buttons}>
      <Button initialLabel="Takeaway options" array={takeAway} />
      <Button initialLabel="Places to go" array={PlacesToGo} />
      <Button initialLabel="Cooking" array={Cooking} />
      <Button initialLabel="Date Ideas" array={DateIdeas} />
    </div>
  );
};
