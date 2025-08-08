import React, { useState } from "react";
import "./App.css";
import "./DarkMode/themes.css";
import Navbar from "./components/Navbar/Navbar";
import MoviList from "./components/MovieList/MoviList";
import { ThemeProvider } from "./DarkMode/ThemeContext";
import Preloader from "./components/Preloader/Preloader";

const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  const handleLoadingComplete = () => {
    setIsLoading(false);
  };

  if (isLoading) {
    return <Preloader onLoadingComplete={handleLoadingComplete} />;
  }

  return (
    <ThemeProvider>
      <div className="App">
        <Navbar />
        <MoviList type="popular" title="popular" />
        <br />
        <br />
        <MoviList type="top_rated" title="Top Rated" />
        <br />
        <br />
        <MoviList type="upcoming" title="Upcoming" />
      </div>
    </ThemeProvider>
  );
};

export default App;
