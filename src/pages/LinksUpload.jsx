import { useState } from "react";
import { useNavigate } from "react-router-dom";

function LinksUpload() {
  const navigate = useNavigate();

  const [linkedin, setLinkedin] = useState("");
  const [github, setGithub] = useState("");
  const [error, setError] = useState("");

  const handleBuildResume = () => {
    if (!linkedin || !github) {
      setError("Please provide both LinkedIn and GitHub links.");
      return;
    }

    setError("");
    navigate("/loading");
  };

  return (
    <div className="page">
      <div className="upload-card">
        <h2>Upload Resume Links</h2>

        <div className="input-group">
          <label>LinkedIn Profile *</label>
          <input
            type="text"
            placeholder="https://linkedin.com/in/yourprofile"
            value={linkedin}
            onChange={(e) => setLinkedin(e.target.value)}
            required
          />
        </div>

        <div className="input-group">
          <label>GitHub Profile *</label>
          <input
            type="text"
            placeholder="https://github.com/yourusername"
            value={github}
            onChange={(e) => setGithub(e.target.value)}
            required
          />
        </div>

        {error && (
          <p style={{ color: "#f87171", marginBottom: "15px" }}>
            {error}
          </p>
        )}

        <button className="btn-primary" onClick={handleBuildResume}>
          Build Resume
        </button>
      </div>
    </div>
  );
}

export default LinksUpload;
