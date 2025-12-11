import Navbar from "./components/layout/Navbar";
import Hero from "./components/sections/Hero";
import About from "./components/sections/About";
import Services from "./components/sections/Services";
import Portfolio from "./components/sections/Portfolio";
import Contact from "./components/sections/Contact";
import Footer from "./components/layout/Footer";
import "./styles/base/total.css";
function App() {
  return (
    <div>
      <ul class="background">
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
      </ul>
      <>
        <Navbar />
        <div id="inicio" className="contenedor-total">
          <Hero />
          <About />
          <Services />
          <Portfolio />
          <Contact />
        </div>
        <Footer />
      </>
    </div>
  );
}

export default App;
