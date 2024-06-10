import React from "react";

function Hello(props) {
  const { name, phone } = props;
  return (
    <div>
      <h1>
        Hello {name} ({phone})
      </h1>
    </div>
  );
}

export default Hello;
