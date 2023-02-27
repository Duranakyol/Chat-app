import { useState } from "react";
import Chat from "../components/Chat";
import Room from "../components/Room";
import io from "socket.io-client";
import "../assets/styles/ChatPage.css";

const socket = io.connect(
  "https://63fc8319a24d110008576cc4--falcon-chatapp.netlify.app"
);

function ChatPage() {
  const [username, setUsername] = useState("");
  const [room, setRoom] = useState("");
  const [chatScreen, setChatScreen] = useState(false);
  return (
    <div className="chatpage">
      {!chatScreen ? (
        <div className="content">
          <Room
            username={username}
            room={room}
            setUsername={setUsername}
            setRoom={setRoom}
            setChatScreen={setChatScreen}
            socket={socket}
          />{" "}
        </div>
      ) : (
        <div className="content2">
          <Chat username={username} room={room} socket={socket} />
        </div>
      )}
    </div>
  );
}

export default ChatPage;
