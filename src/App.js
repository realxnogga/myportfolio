
import { LandingPage } from "./pages/landingPage";
import { AboutPage } from "./pages/aboutpage";
import { ContactMePage } from "./pages/contactmepage";
import { EducationPage } from "./pages/educationpage";
import { Provider } from "react-redux";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Store } from "./store";


function WrapperApp() {
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

export const App = () => {

  return (
    <Provider store={Store}>
      <WrapperApp />
    </Provider>
  )
}

