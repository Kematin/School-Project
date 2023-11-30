// Styles, img
import "./styles/main.css";

// Pages
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Contacts from "./pages/Contacts";

// Components
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";

import ProjectCard from "./pages/ProjectCard";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <Projects />
      <Contacts />
      <ProjectCard />
      <Footer />
    </div>
  );
}

export default App;
