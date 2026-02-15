import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import TemplateSelect from "./pages/TemplateSelect";
import LinksUpload from "./pages/LinksUpload";
import Loading from "./pages/Loading";
import Success from "./pages/Success";
import ATSCheck from "./pages/ATSCheck";
import ATSResult from "./pages/ATSResult";
import Chatbot from "./pages/Chatbot";

import "./style.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/templates" element={<TemplateSelect />} />
        <Route path="/links" element={<LinksUpload />} />
        <Route path="/loading" element={<Loading />} />
        <Route path="/success" element={<Success />} />
        <Route path="/ats" element={<ATSCheck />} />
        <Route path="/ats-result" element={<ATSResult />} />
        <Route path="/chatbot" element={<Chatbot />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
