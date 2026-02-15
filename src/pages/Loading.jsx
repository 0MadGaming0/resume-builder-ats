import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Loading() {
  const navigate = useNavigate();

  useEffect(() => {
    setTimeout(() => {
      navigate("/result");
    }, 2000);
  }, [navigate]);

  return (
    <div className="page">
      <div className="page-content center">
        <h2>Checking your details...</h2>
      </div>
    </div>
  );
}

export default Loading;
