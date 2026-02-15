import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();

  return (
    <div className="page">
      <h2>AI Resume Builder</h2>

      <button onClick={() => navigate("/templates")}>Create Resume</button>

      <button>Import Resume</button>
    </div>
  );
}

export default Home;
