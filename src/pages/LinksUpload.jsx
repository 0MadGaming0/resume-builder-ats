import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

function LinksUpload() {
  const navigate = useNavigate();
  const [linkedin, setLinkedin] = useState("");
  const [github, setGithub] = useState("");

  const handleBuild = () => {
    if (!linkedin || !github) {
      alert("Please fill both links");
      return;
    }
    navigate("/loading");
  };

  return (
    <motion.div
      className="page"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
    >
      <h2>Upload Essential Links</h2>

      <input
        placeholder="LinkedIn URL"
        value={linkedin}
        onChange={(e) => setLinkedin(e.target.value)}
      />

      <br />

      <input
        placeholder="GitHub URL"
        value={github}
        onChange={(e) => setGithub(e.target.value)}
      />

      <br />

      <button onClick={handleBuild}>Build Resume</button>
    </motion.div>
  );
}

export default LinksUpload;
