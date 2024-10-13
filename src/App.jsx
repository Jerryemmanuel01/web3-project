import About from "./components/about/About.jsx"
import Footer from "./components/footer/Footer.jsx";
import Foundation from "./components/foundation/Foundation.jsx";
import Home from "./components/home/Home.jsx"
import Navbar from "./components/navbar/Navbar.jsx"
import SeenIn from "./components/SeenIn.jsx";

function App() {

  return (
    <section className="w-full font-bricolage relative  overflow-hidden">
      <Navbar />
      <Home />
      <About />
      <SeenIn />
      <Foundation />
      <Footer />
    </section>
  );
}

export default App
