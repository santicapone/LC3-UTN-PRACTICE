import React, { useState } from "react";
import LogoutButton from "../logout/LogoutButton";
import Task from "../task/Task";

const TaskList = () => {
  const [tasks, setTasks] = useState([]);
  const [tempTask, setTempTask] = useState("");

  const onChangeHandler = (event) => {
    setTempTask(event.target.value);
  };

  const onClickHandler = () => {
    setTasks([...tasks, tempTask]);
    setTempTask("");
  };

  const deleteTask = (element) => {
    setTasks(tasks.filter((task) => task !== element));
  };

  return (
    <div>
      <LogoutButton />
      <h1>TaskList</h1>
      <input
        onChange={onChangeHandler}
        placeholder="Ingrese una tarea"
        value={tempTask}
      />
      <button onClick={onClickHandler}>Agregar tarea</button>
      {tasks.map((task) => (
        <Task task={task} deleteTask={deleteTask} />
      ))}
    </div>
  );
};

export default TaskList;
