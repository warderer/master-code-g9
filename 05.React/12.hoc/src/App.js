import React from "react";
import User from "./User";
import WithCurrentUser from "./WithCurrentUser";

//? AQUÍ ESTAMOS CREANDO NUESTRO HIGHER ORDER COMPONENT (HOC)
const CurrentUser = WithCurrentUser (User);

function App() {
  return (
    <>
      <CurrentUser />
    </>
  );
}

export default App;
