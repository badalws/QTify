import React, { useState, useEffect } from "react";
import { BrowserRouter } from "react-router-dom";  // Import BrowserRouter
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";

function App() {
  const [searchData, setSearchData] = useState([]);

  useEffect(() => {
    // Mock album data (Replace with API call later)
    setSearchData([
      { title: "Album 1", slug: "album-1" },
      { title: "Album 2", slug: "album-2" },
      { title: "Album 3", slug: "album-3" },
    ]);
  }, []);

  return (
    <BrowserRouter>  {/* Wrap everything inside BrowserRouter */}
      <div className="App">
        <Navbar searchData={searchData} />
        <Hero />
        <main>
          <p>Welcome to QTify! Start building your amazing app.</p>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;