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
        {data.map((item) => {
          return <Card {...item} key={item.id} />;
        })}
      </div>
    </>
  );
}

export default App;
