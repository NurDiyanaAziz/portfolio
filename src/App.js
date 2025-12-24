import Navbar from "./components/Navbar/navbar";
import Intro from "./components/Intro/intro";
import Skills from "./components/Skills/skills";
import Works from "./components/Works/works";
import Contact from "./components/Contact/contact";
import Footer from "./components/Footer/footer";
import { useContext } from "react";
import { themeContext } from "./Context";
import "./App.css"; // Ensure App.css is imported

function App() {
  return (
    // Remove the condition and just use a single class "App dark-theme"
    <div className="App dark-theme">
        <Navbar/>
        <main className="main-content">
            <Intro/>
            <Skills/>
            <Works/>
            <Contact/>
        </main>
        <Footer/>
    </div>
  );
}

export default App;