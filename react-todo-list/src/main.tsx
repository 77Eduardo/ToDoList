import React from 'react'
import ReactDOM from 'react-dom/client'
import ToDoList from './routes/ToDoList.tsx'
import './global.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { CapaToDo } from "./routes/CapaToDo.tsx";
import NotFound from './components/NotFound/index.tsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <CapaToDo />,
    errorElement: <NotFound />
  },
  {
    path: "/to-do-list",
    element:   <ToDoList />,
    errorElement: <NotFound />
  }
]);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)