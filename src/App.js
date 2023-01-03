import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import SocialLinks from "./components/SocialLinks";
import Portfolio from "./components/Portfolio";
import Experience from "./components/Experience";
import Contact from './components/Contact';


function App() {
  return (
  <div>
    <Navbar></Navbar>
    <Home></Home>
    <SocialLinks />

    {/* {About} */}

    <section>
      <About />
    </section>
    <section>
      <Portfolio />
    </section>

    <section>
      <Experience />
    </section>
    <section>
      <Contact />
    </section>
  </div>
  );
}

export default App;
