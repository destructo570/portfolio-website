import "./App.css";
import NavigationBar from "./components/Nav/NavigationBar";
import Hero from "./components/Hero/Hero";

function App() {
  return (
    <div className="App">
      <NavigationBar />
      <main>
        <Hero />
      </main>
    </div>
  );
}

export default App;
