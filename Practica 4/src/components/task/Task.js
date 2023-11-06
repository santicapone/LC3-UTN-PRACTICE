import React, { useState } from "react";
import { BsTrash } from "react-icons/bs";

const Task = ({ task, deleteTask }) => {
  const [isCompleted, setIsCompleted] = useState(false);

  const onClickTextHandler = () => {
    setIsCompleted(!isCompleted);
  };

  const onClickHandler = () => {
    deleteTask(task);
  };

  return (
    <li>
      <p
        style={{
          cursor: "pointer",
          textDecoration: isCompleted ? "line-through" : "none",
          color: isCompleted ? "green" : "red",
        }}
        onClick={onClickTextHandler}
      >
        {task}
      </p>
      <button onClick={onClickHandler}>
        <BsTrash />
      </button>
    </li>
  );
};

export default Task;
