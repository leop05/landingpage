import React from "react";
import "./Information.css";

function Informations({title, image, text}) {
  return (
    <main className="informations">
      <div className="info-block">
        <img
          src={image}
          alt=""
        />
        <div className="info-content">
          <h2>{title}</h2>
          <p>
            {text}
          </p>
        </div>
      </div>
    </main>
  );
}

export default Informations;
