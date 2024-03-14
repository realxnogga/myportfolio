
import { LandingPage } from "./pages/landingPage";
import { AboutPage } from "./pages/aboutpage";
import { ContactMePage } from "./pages/contactmepage";
import { EducationPage } from "./pages/educationpage";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


function App() {
  return ( 
    <Router basename={process.env.PUBLIC_URL}>
    <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/about" element={<AboutPage />} />       
          <Route path="/contactme" element={<ContactMePage />} />
          <Route path="/education" element={<EducationPage />} />

    </Routes>
  </Router>
  );
}

export default App;
