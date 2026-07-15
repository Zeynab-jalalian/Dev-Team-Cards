import React from "react";

function Card() {
  return (
    <div className="card">
      <div className="card-image">
        <img src="/public/images/user1.jfif" alt="Team Member" />
      </div>

      <div className="card-body">
        <h2>Ali Sadeghi</h2>

        <p>Programmer</p>

        <p>Tehran</p>

        <p>33 Years Old</p>

        <p>10 Years Experience</p>
      </div>
    </div>
  );
}

export default Card;
