// Styles, img
import "./styles/main.css";

// Components
import Navbar from "./components/Navbar/Navbar";
import Header from "./components/Header/Header";
import MainSection from "./components/MainSection/MainSection";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Header />
      <MainSection />
      <Footer />
    </div>
  );
}

export default App;
