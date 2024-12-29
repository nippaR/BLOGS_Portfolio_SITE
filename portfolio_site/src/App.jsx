import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./Frontend/HomePage";
import ProgectHshow from "./Frontend/projectHshow";
import Header from "./Frontend/Header";
// import Footer from "./Frontend/Footer";
import Portfolio from "./Frontend/Portfolio";
import Test from "./Frontend/test";
function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/pro" element={<ProgectHshow />} />
        <Route path="/portfolio" element={<Portfolio/>} />
        <Route path="/test" element={<Test />} />
      </Routes>
      {/* <Footer /> */}
    </BrowserRouter>
  );
}

export default App;
