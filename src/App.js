import "./App.css";
import NavigationBar from "./components/Nav/NavigationBar";
import Hero from "./components/Hero/Hero";
import About from "./components/About/About";
import Projects from "./components/Projects/Projects";

function App() {
  return (
    <div className="App">
      <NavigationBar />
      <main>
        <Hero />
        <About />
        <Projects />
      </main>
    </div>
  );
}

export default App;
