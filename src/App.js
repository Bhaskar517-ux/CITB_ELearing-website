import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./Components/NavBar"; // Adjust the path as needed
import TopBar from "./Components/TopBar";
import CITBCourses from "./Components/CITBCourses";
import SMSTSPage from "./Components/SMSTSPage";
// import SearchResults from "./Components/SearchResults";
import HomePage from "./Pages/HomePage";
import AboutPage from "./Pages/AboutPage";
import BlogPage from "./Pages/BlogPage";
import ContactPage from "./Pages/ContactPage";
import PortfolioPage from "./Pages/PortfolioPage";
import ServicePage from "./Pages/ServicePage";
import TeamPage from "./Pages/TeamPage";
import SinglePage from "./Pages/SinglePage";

import "./styles.css";
const App = () => {
  return (
    <Router>
      <TopBar />
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        {/* <Route path="/search" element={<SearchResults />} /> */}
        <Route path="/citb-courses" element={<CITBCourses />} />
        <Route path="/citb-courses/smsts" element={<SMSTSPage />} />
        {/* Add other routes here */}
        <Route path="/about" element={<AboutPage />} />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/portfolio" element={<PortfolioPage />} />
        <Route path="/service" element={<ServicePage />} />
        <Route path="/team" element={<TeamPage />} />
        <Route path="/single" element={<SinglePage />} />
      </Routes>
    </Router>
  );
};

export default App;
