import React from "react";
import HelloFromReact from "reactApp/HelloFromReact";
import HelloVueApp from "./helloVueApp";

function App() {
  return (
    <>
      <h1>Hello From Root</h1>
      <HelloFromReact />
      <HelloVueApp />
    </>
  );
}

export default App;
