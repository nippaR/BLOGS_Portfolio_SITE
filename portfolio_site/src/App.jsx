import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./Frontend/HomePage";
import ProgectHshow from "./Frontend/projectHshow";



function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/pro" element={<ProgectHshow />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
