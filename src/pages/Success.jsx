import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

function Success() {
  const navigate = useNavigate();

  return (
    <motion.div
      className="page"
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
    >
      <h2>Resume Prepared Successfully 🎉</h2>

      <button onClick={() => navigate("/ats")}>
        Run ATS Check
      </button>
    </motion.div>
  );
}

export default Success;
