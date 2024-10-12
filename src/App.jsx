import About from "./components/about/About.jsx"
import Home from "./components/home/Home.jsx"
import Navbar from "./components/navbar/Navbar.jsx"

function App() {

  return (
    <section className="w-full font-bricolage relative  overflow-hidden">
      <Navbar />
      <Home />
      <About />
    </section>
  );
}

export default App
