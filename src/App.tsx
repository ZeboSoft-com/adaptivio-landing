import About from "./components/About";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Survey from "./components/Survey";
import Team from "./components/Team";

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <Team />
      <Survey />
      <Footer />
    </div>
  );
}

export default App;
