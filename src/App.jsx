import React, { useState } from "react";
import Header from "./Components/Header";
import "./App.css";
import Card from "./Components/Card";
import data from "./data.js";
import Selected from "./Components/Selected.jsx";

function App() {
  const [selectedUser, setSelectedUser] = useState();
  const clickedCard = (id) => {
    const user = data.find((item) => {
      return item.id === id;
    });
    setSelectedUser(user);
  };
  return (
    <>
      <Header />
      <div className="cards-container">
        {data.map((item) => {
          return <Card {...item} key={item.id} clickedCard={clickedCard} />;
        })}
      </div>
      <Selected selectedUser={selectedUser} />
    </>
  );
}

export default App;
