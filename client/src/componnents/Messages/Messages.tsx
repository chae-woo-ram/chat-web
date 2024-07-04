import { useEffect } from "react";

import Message from "./Message/Message";
import * as Style from "./MessagesStyle";

// import "./Messages.css";

function Messages({ messages, name }: any) {
  useEffect(() => {
    console.log(messages);
  }, [messages]);

  return (
    <Style.MessagesContainer>
      {messages.map((message: any, i: number) => {
        return (
          <div key={i}>
            <Message message={message} name={name} />
          </div>
        );
      })}
    </Style.MessagesContainer>
  );
}

export default Messages;
