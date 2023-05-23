import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Nav from "./componet/Nav";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Team from "./pages/Team";
import Footer from "./componet/Footer";
import Login from "./pages/Login";
import Register from "./pages/Register";
import MessageBoard from "./pages/MessageBoard";
import { HashRouter, Route, Routes } from "react-router-dom";
import { useState, useEffect } from "react";

function App() {
  const [user, setUser] = useState(null);
  return (
    <>
      <div>
        <HashRouter>
          <Nav user={user} setUser={setUser} className="w-full" />

          <Routes className="rounded-3xl drop-shadow-md  max-w-4xl mx-auto ">
            <Route path="/" element={<Home />} />
            <Route path="Projects" element={<Projects />} />
            <Route path="register" element={<Register />} />
            <Route
              path="login"
              element={<Login user={user} setUser={setUser} />}
            />
            <Route path="messageBoard" element={<MessageBoard user={user} />} />
          </Routes>
        </HashRouter>
        <Footer />
      </div>
    </>
  );
}

export default App;
