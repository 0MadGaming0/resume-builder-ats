import { useState } from "react";

function Chatbot() {
  const [messages, setMessages] = useState([
    { text: "Hello 👋 How can I help you with your resume?", sender: "bot" }
  ]);
  const [input, setInput] = useState("");

  const handleSend = () => {
    if (!input.trim()) return;

    const newMessages = [
      ...messages,
      { text: input, sender: "user" },
      { text: "This is a demo AI response.", sender: "bot" }
    ];

    setMessages(newMessages);
    setInput("");
  };

  return (
    <div className="chatbot-container">
      <div className="chat-header">
        Resume Assistant AI
      </div>

      <div className="chat-body">
        {messages.map((msg, index) => (
          <div
            key={index}
            className={`chat-message ${msg.sender}`}
          >
            {msg.text}
          </div>
        ))}
      </div>

      <div className="chat-input-area">
        <input
          type="text"
          placeholder="Ask something..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && handleSend()}
        />
        <button onClick={handleSend}>Send</button>
      </div>
    </div>
  );
}

export default Chatbot;
