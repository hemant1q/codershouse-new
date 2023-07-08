import React from "react";
import styles from "./Home.module.css";
import { Link, useHistory } from "react-router-dom";
import Card from "../../components/shared/Card/Card";
import Button from "../../components/shared/Button/Button";
const Home = () => {
  const signInLinkStyle = {
    color: "#0077ff",
    fontWeight: "bold",
    textDecoration: "none",
    marginLeft: "8px",
  };
  const history = useHistory({ forceRefresh: true });
  function startRegister() {
    history.push("/authenticate");
  }

  return (
    <div className={styles.cardWrapper}>
      <Card title="Welcome to Codershouse" icon="logo">
        <p className={styles.text}>
          We're working hard to get the codershouse ready for everyone! While we
          wrap up the finishing touches, we adding people gradually to make sure
          nothing breaks :)
        </p>
        <div>
          <Button text="Get your username" onClick={startRegister} />
          <div className={styles.signInWrapper}>
            <span className={styles.hasInvite}>Have an invite text?</span>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default Home;
