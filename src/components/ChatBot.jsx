import { useState } from "react";

const ChatBot = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");

  const sendMessage = () => {
    if (!input.trim()) return;
    setMessages([...messages, { text: input, sender: "user" }]);
    setInput("");
  };

  return (
    <div className="fixed bottom-4 right-4 w-80 bg-white border shadow-lg rounded-lg p-4">
      <div className="h-60 overflow-y-auto border-b mb-2">
        {messages.map((msg, i) => (
          <div key={i} className={`p-1 ${msg.sender === "user" ? "text-right" : "text-left"}`}>
            <span className="bg-gray-200 px-2 py-1 rounded">{msg.text}</span>
          </div>
        ))}
      </div>
      <div className="flex">
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="border flex-1 p-1"
          placeholder="Type a message..."
        />
        <button onClick={sendMessage} className="bg-blue-500 text-white px-3">Send</button>
      </div>
    </div>
  );
};

export default ChatBot;
