import { useNavigate } from "react-router-dom";

function ATSCheck() {
  const navigate = useNavigate();

  const handleCheck = () => {
    navigate("/ats-result");
  };

  return (
    <div className="page">
      <h2>ATS Check</h2>

      <button onClick={handleCheck}>
        Check Resume
      </button>
    </div>
  );
}

export default ATSCheck;
