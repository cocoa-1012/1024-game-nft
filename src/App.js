import "./App.css";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import Play from "./components/Play/Play";
import Token from "./components/Token/Token";
import WhatIs from "./components/WhatIs/WhatIs";

function App() {
  return (
    <div className="page-container">
      <Header />
      <Hero />
      <WhatIs />
      <Play />
      <Token />
    </div>
  );
}

export default App;
