import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Home";
import DetailsPage from "./DetailsPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/excursion/:name" element={<DetailsPage />} />
      </Routes>
    </Router>
  );
}

export default App;
