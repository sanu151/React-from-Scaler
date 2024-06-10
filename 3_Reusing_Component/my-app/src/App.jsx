import { useState } from "react";
import "./App.css";
import Hello from "./components/Hello";

function App() {
  return (
    <>
      <Hello name="Supriyo" phone="9932562329" />
      <Hello name="Rupa" phone="8190591959" />
      <Hello name="Rishika" phone="7980021002" />
    </>
  );
}

export default App;
