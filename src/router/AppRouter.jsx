import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Header from "../layout/header";
import Footer from "../layout/Footer";
import './style.scss'

const AppRouter = () => {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
};

export default AppRouter;
