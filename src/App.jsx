import React from "react";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Timer from "./Components/Timer";

function App() {
  return (
    <div className="flex justify-center items-center w-full h-screen bg-hero-pattern bg-center bg-cover">
      <Header />
      <Timer />
      <Footer />
    </div>
  );
}

export default App;
