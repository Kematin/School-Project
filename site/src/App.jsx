// libs
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// utils
import ScrollToTop from "./utils/scrollToTop";

// Styles, img
import "./styles/main.css";

// Pages
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Learning from "./pages/Learning";
import ProjectCard from "./pages/ProjectCard";
import ProjectBank from "./pages/ProjectBank";
import Undefined from "./pages/Undefined";

// Components
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div className="App">
      <Router>
        <ScrollToTop />
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/project/1" element={<ProjectBank />} />
          <Route path="/project/:id" element={<ProjectCard />} />
          <Route path="/learning" element={<Learning />} />
          <Route path="*" element={<Undefined />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
