import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

function ATSResult() {
  const navigate = useNavigate();
  const score = Math.floor(Math.random() * 100);
  const passed = score >= 70;

  return (
    <div className="page">
      <h2>ATS Score</h2>

      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ type: "spring", stiffness: 120 }}
        style={{
          fontSize: "48px",
          fontWeight: "bold",
          color: passed ? "#16a34a" : "#dc2626"
        }}
      >
        {score}%
      </motion.div>

      {passed ? (
        <>
          <p>Your resume is ATS friendly 🎉</p>
          <button>Export Resume</button>
        </>
      ) : (
        <>
          <p>Your resume needs improvement.</p>
          <button onClick={() => navigate("/chatbot")}>
            Improve with Chatbot
          </button>
        </>
      )}
    </div>
  );
}

export default ATSResult;
