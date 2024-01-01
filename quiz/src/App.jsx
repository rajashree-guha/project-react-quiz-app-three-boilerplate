import React from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomeComponent from "./Components/HomeComponent";
import QuzComponent from "./Components/QuzComponent";
import ResultComponent from "./Components/ResultComponent";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomeComponent />} />
        <Route path="/Quiz" element={<QuzComponent />} />
        <Route
          path="/Result"
          element={<ResultComponent />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;