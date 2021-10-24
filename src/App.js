import "./App.css";
import NavigationBar from "./components/Nav/NavigationBar";
import Hero from "./components/Hero/Hero";
import About from "./components/About/About";

function App() {
  return (
    <div className="App">
      <NavigationBar />
      <main>
        <Hero />
        <About />
      </main>
    </div>
  );
}

export default App;
