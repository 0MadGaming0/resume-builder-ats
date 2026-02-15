import { useNavigate } from "react-router-dom";

function TemplateSelect() {
  const navigate = useNavigate();

  return (
    <div className="page">
      <h2>Select a Template</h2>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "20px", marginTop: "30px" }}>
        {[1,2,3,4,5,6].map((item) => (
          <div
            key={item}
            style={{
              height: "120px",
              background: "#ddd",
              borderRadius: "8px",
              cursor: "pointer"
            }}
            onClick={() => navigate("/links")}
          />
        ))}
      </div>
    </div>
  );
}

export default TemplateSelect;
