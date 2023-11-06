import React from "react";
import { useNavigate } from "react-router";

const LogoutButton = () => {
  const navigate = useNavigate();

  const onClickHandler = () => {
    navigate("/");
  };
  return (
    <div>
      <button onClick={onClickHandler}>Cerrar sesión</button>
    </div>
  );
};

export default LogoutButton;
