import { useState } from "react";
import { useNavigate } from "react-router-dom";

function LinksUpload() {
  const navigate = useNavigate();

  const [linkedin, setLinkedin] = useState("");
  const [github, setGithub] = useState("");
  const [error, setError] = useState("");

  const validateURL = (url, domain) => {
    try {
      const parsed = new URL(url);
      return parsed.hostname.includes(domain);
    } catch {
      return false;
    }
  };

  const handleBuildResume = () => {
    if (!validateURL(linkedin, "linkedin.com")) {
      setError("Please enter a valid LinkedIn profile URL.");
      return;
    }

    if (!validateURL(github, "github.com")) {
      setError("Please enter a valid GitHub profile URL.");
      return;
    }

    setError("");
    navigate("/loading");
  };

  return (
    <div className="page">
      <div className="upload-card">
        <h2>Build Resume</h2>

        <div className="input-group">
          <label>LinkedIn Profile *</label>
          <input
            type="text"
            value={linkedin}
            onChange={(e) => setLinkedin(e.target.value)}
            placeholder="https://linkedin.com/in/yourprofile"
          />
        </div>

        <div className="input-group">
          <label>GitHub Profile *</label>
          <input
            type="text"
            value={github}
            onChange={(e) => setGithub(e.target.value)}
            placeholder="https://github.com/yourusername"
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
