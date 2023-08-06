import React from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Dialogs from "./components/Dialogs/Dialogs";
import Error404 from "./components/Error/Error404";
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile";

const App = () => {
  return (
    <div className="app-wrapper">
      {/* <Header /> */}

      <Header />
      <Navbar />
      <div className="app-wrapper-content">
        <Routes>
          <Route path={'/profile'} element={<Profile />} />
          <Route path={'/dialogs'} element={<Dialogs />} />
          <Route path={'/*'} element={<Error404 />} />
        </Routes>
      </div>

      {/* <div className="content">Content</div> */}
    </div>
  );
};

export default App;
