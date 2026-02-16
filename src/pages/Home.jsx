import { useNavigate } from "react-router-dom";
import { useState } from "react";

function Home() {
  const navigate = useNavigate();
  const [openChat, setOpenChat] = useState(false);
  const [messages, setMessages] = useState([
    { text: "👋 Hi! I can help you build your resume.", sender: "bot" },
  ]);
  const [input, setInput] = useState("");

  const sendMessage = () => {
    if (!input.trim()) return;

    const newMessages = [
      ...messages,
      { text: input, sender: "user" },
      { text: "I'm still under development 🚀", sender: "bot" },
    ];

    setMessages(newMessages);
    setInput("");
  };

  return (
    <div className="page">
      <div className="home-content">
        <h1>AI Resume Builder</h1>
        <p>Create ATS-Friendly Professional Resumes</p>

        <div className="home-buttons">
          <button
            className="btn-primary"
            onClick={() => navigate("/templates")}
          >
            Create Resume
          </button>

          <button className="btn-secondary" onClick={() => navigate("/import")}>
            Import Resume
          </button>
        </div>
      </div>

      {/* Floating Chatbot */}
      <div className="chatbot-container">
        {openChat && (
          <div className="chatbot-window">
            <div className="chatbot-header">
              Resume Assistant
              <span onClick={() => setOpenChat(false)}>✕</span>
            </div>

            <div className="chatbot-body">
              {messages.map((msg, index) => (
                <div key={index} className={`chat-message ${msg.sender}`}>
                  {msg.text}
                </div>
              ))}
            </div>

            <div className="chatbot-input">
              <input
                type="text"
                placeholder="Ask something..."
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && sendMessage()}
              />
              <button onClick={sendMessage}>Send</button>
            </div>
          </div>
        )}

        {!openChat && (
          <>
            <div className="chatbot-tooltip">Need help with your resume?</div>

            <button
              className="chatbot-toggle"
              onClick={() => setOpenChat(true)}
            >
              💬
            </button>
          </>
        )}
      </div>
    </div>
  );
}

export default Home;
