import { motion } from "framer-motion";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Loading() {
  const navigate = useNavigate();

  useEffect(() => {
    setTimeout(() => {
      navigate("/success");
    }, 2000);
  }, [navigate]);

  return (
    <div className="page">
      <h2>Checking your details...</h2>

      <motion.div
        style={{
          width: "100%",
          height: "6px",
          background: "#4f46e5",
          marginTop: "30px",
          borderRadius: "6px"
        }}
        initial={{ width: 0 }}
        animate={{ width: "100%" }}
        transition={{ duration: 2 }}
      />
    </div>
  );
}

export default Loading;
