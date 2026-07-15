import React from "react";
import Header from "./Components/Header";
import "./App.css";
import Card from "./Components/Card";
import data from "./data.js";

function App() {
  const clickedCard = (id) => {
    const selectedUser = data.find((item) => {
      return item.id === id;
    });

    alert(selectedUser.name);
  };
  return (
    <>
      <Header />
      <div className="cards-container">
        {data.map((item) => {
          return <Card {...item} key={item.id} clickedCard={clickedCard} />;
        })}
      </div>
    </>
  );
}

export default App;
