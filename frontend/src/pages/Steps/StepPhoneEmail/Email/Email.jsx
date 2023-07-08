import React, { useState } from "react";
import Card from "../../../../components/shared/Card/Card";
import Button from "../../../../components/shared/Button/Button";
import TextInput from "../../../../components/shared/TextInput/TextInput";
import styles from "../StepPhoneEmail.module.css";

const Email = ({ onNext }) => {
  const [Email, setEmail] = useState("");

  return (
    <Card title="Enter your email id" icon="mail-white">
      <TextInput value={Email} onChange={(e) => setEmail(e.target.value)} />

      <div className={styles.actionButtonWrap}>
        <Button text="Next" onClick={onNext} />
      </div>
      <p className={styles.bottomParagraph}>
        By entering your email, you're agreeing to out Terms of Service and
        Policy. Thanks!
      </p>
    </Card>
  );
};

export default Email;
