import { useNavigate } from "react-router-dom";
import { useState } from "react";

function LinksUpload() {
  const navigate = useNavigate();
  const [linkedin, setLinkedin] = useState("");
  const [github, setGithub] = useState("");

  const handleBuild = () => {
    if (!linkedin || !github) {
      alert("Please enter both LinkedIn and GitHub links.");
      return;
    }

    navigate("/loading");
  };

  return (
    <div className="page">
      <h2>Upload Essential Links</h2>

      <div style={{ marginTop: "30px" }}>
        <input
          type="text"
          placeholder="LinkedIn URL"
          value={linkedin}
          onChange={(e) => setLinkedin(e.target.value)}
          style={{ padding: "10px", margin: "10px", width: "250px" }}
        />

        <br />

        <input
          type="text"
          placeholder="GitHub URL"
          value={github}
          onChange={(e) => setGithub(e.target.value)}
          style={{ padding: "10px", margin: "10px", width: "250px" }}
        />

        <br />

        <button onClick={handleBuild}>
          Build Resume
        </button>
      </div>
    </div>
  );
}

export default LinksUpload;
