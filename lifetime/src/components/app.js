import { Component } from "react";
import React from "react";
import ReactDOM from "react-dom/client";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import "../styles/app.css";
import NavBar from "./navbar";


class App extends Component {
  render() {
    return (
      <>
        <div className="main">
          <NavBar/>
        </div>
      </>
    );
  }
}

export default App;
