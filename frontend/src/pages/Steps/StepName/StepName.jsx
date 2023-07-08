import React, { useState } from "react";
import Card from "../../../components/shared/Card/Card";
import Button from "../../../components/shared/Button/Button";
import TextInput from "../../../components/shared/TextInput/TextInput";
import styles from "./StepName.module.css";
import { useDispatch, useSelector } from "react-redux";
import { setName } from "../../../store/activateSlice";

const StepAvatar = ({ onNext }) => {
  const { name } = useSelector((state) => state.activate);
  const dispatch = useDispatch();
  const [fullName, setFullName] = useState(name);
  function nextStep() {
    if (!fullName) {
      return;
    }
    dispatch(setName(fullName));
    onNext();
  }
  return (
    <div className={styles.cardWrapper}>
      <Card title="What's your full name" icon="goggle-emoji">
        <TextInput
          value={fullName}
          onChange={(e) => setFullName(e.target.value)}
        />
        <p className={styles.paragraph}>
          Please enter real names at codershouse :)
        </p>
        <div className={styles.actionButtonWrap}>
          <Button onClick={nextStep} text="Next" />
        </div>
      </Card>
    </div>
  );
};

export default StepAvatar;
