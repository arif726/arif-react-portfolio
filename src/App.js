import About from "./components/About";
import Contact from "./components/Contact";
import Experiance from "./components/Experiance";
import Footer from "./components/Footer";
import Home from "./components/Home";
import NavBar from "./components/NavBar";
import Portfolio from "./components/Portfolio";
import SocialLink from "./components/SocialLink";

function App() {
  return (
    
    <div>
      <NavBar />
      <Home />
      <About />
      <Portfolio />
      <Experiance />
      <Contact />
      <Footer/>

      <SocialLink/>
    
    </div>

  )
}

export default App;
