import React, { useState } from "react";
import { useNavigate } from "react-router";

const Login = () => {
  const [username, setUsername] = useState("");
  const navigate = useNavigate();

  const changeUsernameHandler = (event) => {
    if (event.target.value.includes("O") || event.target.value.includes("o")) {
      alert("Por favor, ¡Nombres de usuario sin la letra o!");
    }
    setUsername(event.target.value);
  };

  const buttonHandler = () => {
    if (username.includes("o") || username.includes("O") || username === "") {
      alert("Usuario inválido para registrarse.");
    } else {
      alert("Usuario registrado correctamente.");
      navigate("/TaskList");
    }
  };

  return (
    <div>
      <input placeholder="Username" onChange={changeUsernameHandler} />
      <button onClick={buttonHandler}>Iniciar sesión</button>
      <p>{username}</p>
    </div>
  );
};

export default Login;
