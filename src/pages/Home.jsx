import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();

  return (
    <motion.div
      className="page"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
    >
      <h2>AI Resume Builder</h2>

      <button onClick={() => navigate("/templates")}>
        Create Resume
      </button>

      <button>Import Resume</button>
    </motion.div>
  );
}

export default Home;
