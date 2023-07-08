import React from "react";
import styles from "./RoomsCard.module.css";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

const RoomCard = ({ room }) => {
  const history = useHistory();
  return (
    <div
      onClick={() => {
        history.push(`/room/${room.id}`);
      }}
      className={styles.card}
    >
      <h3 className={styles.topic}>{room.topic}</h3>
      <div
        className={`${styles.speakers} ${
          room.speakers.length === 1 ? styles.singleSpeaker : ""
        }`}
      >
        <div className={styles.avatars}>
          {room.speakers.map((speaker) => (
            <img key={speaker.id} src={speaker.avatar} alt="speaker-avatar" />
          ))}
        </div>
        <div className={styles.names}>
          {room.speakers.map((speaker) => (
            <div key={speaker.id} className={styles.nameWrapper}>
              <span>{speaker.name}</span>
              <img src="/images/image 9.png" alt="chat-bubble" />
            </div>
          ))}
        </div>
      </div>
      <div className={styles.peopleCount}>
        <span>{room.totalPeople}</span>
        <img src="/images/Account.png" alt="user-icon" />
      </div>
    </div>
  );
};

export default RoomCard;
