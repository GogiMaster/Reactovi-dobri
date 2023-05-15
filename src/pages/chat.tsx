import { useState } from "react";

type Message = {
  content: string;
  area: string;
};

const Chat = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState<string>("");

  const sendMessage = (input: string) => {
    if (input) {
      const newMessage: Message = {
        content: input,
        area: "",
      };
      setMessages([...messages, newMessage]);
      setInput("");
    }
  };

  return (
    <div className="container">
      <div className="chat">
        <div className="chat__screen">
          {messages.map((mess) => {
            return (
              <div key={mess.area} className="chat__screen__text">
                {mess.content}
              </div>
            );
          })}
        </div>
        <div className="chat__input">
          <input
            className="chat__input__input"
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Message . . ."
          />
          <button
            onClick={() => sendMessage(input)}
            className="chat__input__btn"
          >
            Send
          </button>
        </div>
      </div>
    </div>
  );
};

export default Chat;
