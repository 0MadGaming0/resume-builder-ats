import { useNavigate } from "react-router-dom";

function ATSResult() {
  const navigate = useNavigate();

  const score = Math.floor(Math.random() * 100);

  const passed = score >= 70;

  return (
    <div className="page">
      <h2>ATS Score: {score}</h2>

      {passed ? (
        <>
          <p>Congrats! Your resume is ATS friendly.</p>
          <button>Export Resume</button>
        </>
      ) : (
        <>
          <p>Sorry, your resume is not ATS accepted.</p>
          <button onClick={() => navigate("/chatbot")}>
            Go to Chatbot
          </button>
        </>
      )}
    </div>
  );
}

export default ATSResult;
