import React from "react";

function MyAnimal(props) {
  return (
    <div>
      <p>
        <b>
          <u>{props.name}</u>
        </b>
        : {props.desc}
      </p>
    </div>
  );
}

export default MyAnimal;
