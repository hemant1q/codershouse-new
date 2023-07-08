class RoomDto {
  id;
  topic;
  roomType;
  ownerId;
  speakers;
  createdAt;

  constructor(room) {
    this.id = room._id;
    this.topic = room.topic;
    this.roomType = room.roomType;
    this.ownerId = room.ownerId;
    this.createdAt = room.createdAt;
    this.speakers = room.speakers;
  }
}

module.exports = RoomDto;
