import Header from "./components/Header";
import Hero from "./components/Hero";
import HowItWorks from "./components/HowItWorks";
import Schedule from "./components/Schedule";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  return (
    <div className="app">
      <Header />
      <Hero />
      <HowItWorks />
      <Schedule />
      <Footer />
    </div>
  );
}

export default App;