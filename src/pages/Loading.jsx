import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Loading() {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate("/success");
    }, 2000); // 2 seconds

    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div className="page">
      <h2>Checking the details</h2>
      <p>Collecting:</p>
      <p>• LinkedIn</p>
      <p>• GitHub</p>
      <p>• Skills</p>
      <p>• Experience</p>
    </div>
  );
}

export default Loading;
