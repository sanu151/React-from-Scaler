import React from "react";

function Array() {
  let animals = ["Cat", "Dog", "Monkey"];
  return (
    <div>
      <ol>
        {animals.map((animal) => (
          <li>
            <b>{animal}</b>
          </li>
        ))}
      </ol>
    </div>
  );
}

export default Array;
