import React from "react";

function Room({ username, room, setUsername, setRoom, setChatScreen, socket }) {
  const sendRoom = () => {
    socket.emit("room", room);
    setChatScreen(true);
  };
  return (
    <div className="flex items-center justify-center h-full">
      <div className="w-1/3 h-[400px] rounded-lg bg-indigo-300 flex flex-col space-y-4 p-3">
        <h1 className=" text-center my-4 font-bold text-2xl">
          WELCOME THE CHAT
        </h1>
        <input
          className="h-12 rounded-xl p-3 outline-none"
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          className="h-12 rounded-xl p-3 outline-none"
          type="text"
          placeholder="Room"
          value={room}
          onChange={(e) => setRoom(e.target.value)}
        />
        <div
          onClick={sendRoom}
          className=" tracking-wider hover:opacity-70 cursor-pointer text-white bg-indigo-900 h-12 pt-2 text-xl text-center rounded-lg"
        >
          Chat!!!
        </div>
      </div>
    </div>
  );
}

export default Room;
