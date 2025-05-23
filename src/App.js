import React from "react";
import { BrowserRouter } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Section from "./components/Section";


function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <Hero />
        <Section title="Top Albums" apiUrl="https://qtify-backend-labs.crio.do/albums/top" />
        <Section title="New Albums" apiUrl="https://qtify-backend-labs.crio.do/albums/new" />
        <Section title="Songs" apiUrl="https://qtify-backend-labs.crio.do/songs" isSongsSection={true} />
      </div>

    </BrowserRouter>
  );
}

export default App;