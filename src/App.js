import React, { useState } from "react";
import "./styles.css";

const Button = () => <button>No toques</button>;

// const Nombre = () => <h1> cosa rara </h1>
const Papita = ({ parametro }) => <h2>{parametro}</h2>;

const GrupoPapitas = (props) => {
  return (
    <>
      <Papita parametro={props.texto} />
    </>
  );
};

export default function App() {
  const [contador, setContador] = useState(1);

  return (
    <div className="App">
      <h1>Mi primer ejemplo</h1>
      {contador}
      {console.log("render")}
      <GrupoPapitas texto="algo de grupo papitas" />
      {/* <Button /> */}
      <button onClick={() => setContador(contador + 1)}>No toques</button>
    </div>
  );
}
