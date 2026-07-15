import React from "react";

function Card({ name, city, job, age, experience, image, level }) {
  return (
    <div className="card">
      <div className="card-image">
        <img src={`/images/${image}`} alt="Team Member" />
      </div>

      <div className="card-body">
        <h2>{name}</h2>

        <p>{job}</p>

        <p>{city}</p>

        <p>{age} Years Old</p>

        <p>{experience} Experience</p>

        <p className={level === "Senior" ? "senior" : "normal"}>{level}</p>
      </div>
    </div>
  );
}

export default Card;
