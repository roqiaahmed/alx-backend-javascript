import ClassRoom from "./0-classroom";

export default function initializeRooms() {
  return [new ClassRoom(19), new ClassRoom(15), new ClassRoom(10)];
}