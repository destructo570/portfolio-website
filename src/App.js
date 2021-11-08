import "./App.css";
import { ThemeProvider } from "styled-components";
import GlobalStyle from "./components/Global/styledComponents/GlobalStyles";
import { theme } from "./Theme/Theme";
import NavigationBar from "./components/Nav/NavigationBar";
import Hero from "./components/Hero/Hero";
import About from "./components/About/About";
import Projects from "./components/Projects/Projects";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <GlobalStyle />

        <NavigationBar />
        <main>
          <Hero />
          <About />
          <Projects />
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;
