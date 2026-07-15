import React from "react";
import Header from "./Components/Header";
import "./App.css";
import Card from "./Components/Card";
import data from "./data.js";

function App() {
  return (
    <>
      <Header />
      <div className="cards-container">
        <Card {...data[0]} />
        <Card {...data[1]} />
        <Card {...data[2]} />
        <Card {...data[3]} />
        <Card {...data[4]} />
        <Card {...data[5]} />
      </div>
    </>
  );
}

export default App;
