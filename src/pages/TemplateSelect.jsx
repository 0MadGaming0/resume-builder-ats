import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

function TemplateSelect() {
  const navigate = useNavigate();

  return (
    <motion.div
      className="page"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
    >
      <h2>Select a Template</h2>

      <div className="template-grid">
        {[1,2,3,4,5,6].map((item) => (
          <motion.div
            key={item}
            className="template-card"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => navigate("/links")}
          />
        ))}
      </div>
    </motion.div>
  );
}

export default TemplateSelect;
