import React from "react";
import { useNavigate } from "react-router";

const LoginButton = () => {
  const navigate = useNavigate();

  const onClickHandler = () => {
    navigate("/Login");
  };
  return (
    <div>
      <button onClick={onClickHandler}>Iniciar sesión</button>
    </div>
  );
};

export default LoginButton;
