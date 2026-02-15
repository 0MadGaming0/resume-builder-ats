import { motion } from "framer-motion";

function Chatbot() {
  return (
    <motion.div
      className="page"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <h2>Resume Improvement Chatbot</h2>

      <div style={{
        border: "1px solid #ddd",
        borderRadius: "10px",
        padding: "20px",
        height: "200px",
        marginBottom: "20px",
        textAlign: "left"
      }}>
        <p><strong>AI:</strong> You are missing React and Node.js skills.</p>
      </div>

      <input placeholder="Ask something..." />
      <button>Send</button>
    </motion.div>
  );
}

export default Chatbot;
