import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();

  return (
    <div className="page">
      <div className="home-content">
        <h1>AI Resume Builder</h1>
        <p>Create ATS-Friendly Professional Resumes</p>

        <div className="home-buttons">
          <button
            className="btn-primary"
            onClick={() => navigate("/templates")}
          >
            Create Resume
          </button>

          <button
            className="btn-secondary"
            onClick={() => navigate("/import")}
          >
            Import Resume
          </button>
        </div>
      </div>
    </div>
  );
}

export default Home;
