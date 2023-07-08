import React, { useEffect, useState } from "react";
import styles from "./Rooms.module.css";
import RoomCard from "../../components/shared/RoomCard/RoomCard";
import AddRoomModal from "../../components/AddRoomModal/AddRoomModal";
import { getAllRooms } from "../../http";

// const rooms = [
// {
//   id: 1,
//   topic: "Which Framework best for frontend?",
//   speakers: [
//     {
//       id: 1,
//       name: "Hemant Joshi",
//       avatar: "/images/avatar.webp",
//     },
//     {
//       id: 2,
//       name: "Mukta Joshi",
//       avatar: "/images/avatar.webp",
//     },
//   ],
//   totalPeople: 40,
// },
// {
//   id: 2,
//   topic: "Which Framework best for frontend?",
//   speakers: [
//     {
//       id: 1,
//       name: "Tinu pareek",
//       avatar: "/images/avatar.webp",
//     },
//     {
//       id: 2,
//       name: "Pankaj Joshi",
//       avatar: "/images/avatar.webp",
//     },
//   ],
//   totalPeople: 40,
// },
// {
//   id: 3,
//   topic: "Which is best JS OR PYTHON?",
//   speakers: [
//     {
//       id: 1,
//       name: "Gouravi Pareek",
//       avatar: "/images/avatar.webp",
//     },
//     {
//       id: 2,
//       name: "Ramesh Kumar",
//       avatar: "/images/avatar.webp",
//     },
//   ],
//   totalPeople: 40,
// },
// {
//   id: 4,
//   topic: "What is new in Machine Learning?",
//   speakers: [
//     {
//       id: 1,
//       name: "Gouravi Pareek",
//       avatar: "/images/avatar.webp",
//     },
//     {
//       id: 2,
//       name: "Ramesh Kumar",
//       avatar: "/images/avatar.webp",
//     },
//   ],
//   totalPeople: 40,
// },
// ];

const Rooms = () => {
  const [showModal, setShowModal] = useState(false);
  const [rooms, setRooms] = useState([]);

  useEffect(() => {
    const fetchRooms = async () => {
      const { data } = await getAllRooms();
      setRooms(data);
    };
    fetchRooms();
  }, []);

  function openModal() {
    setShowModal(true);
  }
  return (
    <>
      <div className="container">
        <div className={styles.roomsHeader}>
          <div className={styles.left}>
            <span className={styles.heading}>All voice Rooms</span>
            <div className={styles.searchBox}>
              <img src="/images/search.png" alt="" />
              <input type="text" className={styles.searchInput} />
            </div>
          </div>
          <div className={styles.right}>
            <button onClick={openModal} className={styles.startRoom}>
              <img src="/images/Group 24.png" alt="" />
              <span>Start A Room</span>
            </button>
          </div>
        </div>

        <div className={styles.RoomList}>
          {rooms.map((room) => (
            <>
              {" "}
              <RoomCard key={room.id} room={room} />
            </>
          ))}
        </div>
      </div>
      {showModal && <AddRoomModal onClose={() => setShowModal(false)} />}
    </>
  );
};

export default Rooms;
