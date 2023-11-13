import React from "react";
import { Routes, Route } from "react-router-dom";
import { Navbar, NotFound } from "../components";
import { Location, Header, Work, Packages } from "../container";
import { workData, headerData, navMenu, navLayout } from "./imports";
import "./App.css";

const App = () => {
  return (
    <div className="App">
      <div className="">
        <Navbar NavbarList={navMenu} NavLayout={navLayout} />
        <Routes>
          <Route
            path="/beo-studio/"
            element={<Header HeaderData={headerData} />}
          />
          <Route
            path="/beo-studio/home"
            element={<Header HeaderData={headerData} />}
          />
          <Route
            path="/beo-studio/work"
            element={<Work WorkData={workData} />}
          />
          <Route path="/beo-studio/packages" element={<Packages />} />
          <Route path="/beo-studio/location" element={<Location />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </div>
  );
};

export default App;

//This is a version for deployment
