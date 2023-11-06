import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import Home from "./components/home/Home";
import Login from "./components/login/Login";
import TaskList from "./components/taskList/TaskList";

function App() {
  const router = createBrowserRouter([
    { path: "/", element: <Home /> },
    { path: "/Login", element: <Login /> },
    {path: "/TaskList" , element: <TaskList/>}
  ]);

  return <RouterProvider router={router} />;
}

export default App;
