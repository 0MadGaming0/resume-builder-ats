import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

function ATSCheck() {
  const navigate = useNavigate();

  return (
    <motion.div
      className="page"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
    >
      <h2>ATS Check</h2>

      <button onClick={() => navigate("/ats-result")}>
        Check Resume
      </button>
    </motion.div>
  );
}

export default ATSCheck;
