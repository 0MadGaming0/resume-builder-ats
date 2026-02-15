import { useNavigate } from "react-router-dom";

function Success() {
  const navigate = useNavigate();

  return (
    <div className="page">
      <h2>Resume has been prepared successfully</h2>

      <button onClick={() => navigate("/ats")}>
        Run ATS Check
      </button>
    </div>
  );
}

export default Success;
