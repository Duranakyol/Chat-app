import { useState } from "react";
import Chat from "../components/Chat";
import Room from "../components/Room";
import io from "socket.io-client";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "./ChatPage.css";

const socket = io.connect("http://localhost:5000");

function ChatPage() {
  const [username, setUsername] = useState("");
  const [room, setRoom] = useState("");
  const [chatScreen, setChatScreen] = useState(false);
  return (
    <div className="chatpage">
      <Navbar />
      {!chatScreen ? (
        <Room
          username={username}
          room={room}
          setUsername={setUsername}
          setRoom={setRoom}
          setChatScreen={setChatScreen}
          socket={socket}
        />
      ) : (
        <Chat username={username} room={room} socket={socket} />
      )}
      <Footer />
    </div>
  );
}

export default ChatPage;
