"use client";

import queryString from "query-string";
import { useEffect, useState } from "react";
import io from "socket.io-client";
import InfoBar from "../../componnents/InfoBar/InfoBar";
import Input from "../../componnents/Input/Input";
import Messages from "../../componnents/Messages/Messages";
import TextContainer from "../../componnents/TextContainer/TextContainer";
// import InfoBar from "../../components/InfoBar/InfoBar";
// import Input from "../../components/Input/Input";
// import Messages from "../../components/Messages/Messages";
// import TextContainer from "../../components/TextContainer/TextContainer";

const ENDPOINT = "http://localhost:5001";
let socket: any;

function Chat() {
  const [name, setName] = useState<string>("");
  const [room, setRoom] = useState("");
  const [users, setUsers] = useState<string[]>([]);
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState<any[]>([]);

  useEffect(() => {
    if (queryString) {
      const { name, room } = queryString.parse(window.location.search);
      socket = io(ENDPOINT);
      setName(name as string);
      setRoom(room as string);

      socket.emit("join", { name, room }, (err: any) => {
        if (err) {
          // alert(err);
          console.log("err", err);
        }
      });
    }

    return () => {
      socket.emit("userDisconnect");
      socket.off();
    };
  }, [queryString]);

  useEffect(() => {
    socket.on("message", (message: any) => {
      setMessages((messages) => [...messages, message]);
    });

    socket.on("roomData", ({ users }: { users: any[] }) => {
      setUsers(users);
    });
  }, []);

  const sendMessage = (event: any) => {
    event.preventDefault();
    if (message) {
      console.log("message", message);
      socket.emit("sendMessage", message, () => setMessage(""));
    }
  };

  return (
    <div className="outerContainer">
      <div className="container">
        <InfoBar />
        <Messages messages={messages} name={name} />
        <Input
          message={message}
          setMessage={setMessage}
          sendMessage={sendMessage}
        />
      </div>
      <TextContainer />
    </div>
  );
}

export default Chat;
