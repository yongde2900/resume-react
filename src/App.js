import logo from "./logo.svg";
import "./App.css";
import { FacebookProvider, useLogin } from "react-facebook";
import FbLogin from "./FbLogin";
import { useEffect, useState } from "react";
import { request } from "./api";
import axios from "axios";
import Message from "./Message";
import Login from "./login";
import Register from "./Rigister";
import Comment from "./Comment";

function App() {
  return (
    <div className="App">
      <Comment></Comment>
      <h1>Login</h1>
      <Login></Login>
      <h1>Register</h1>
      <Register></Register>
    </div>
  );
}

export default App;
