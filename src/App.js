import NavBar from "./components/NavBar";
import Home from "./components/Home";
import About from "./components/About";
import Skills from "./components/skills/Skills";
import Work from "./components/works/Work";
import Contact from "./components/Contact";
function App() {
  return (
    <div className="bg-[#0a192f] dark:bg-white">
      <NavBar/>
      <Home/>
      <About/>
      <Skills/>
      <Work/>
      <Contact/>
    </div>
  );
}

export default App;
