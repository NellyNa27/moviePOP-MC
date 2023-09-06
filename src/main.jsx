import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import vehicles from "./data/vehicles";
import VehicleView from "./views/VehicleView.jsx";


const routes = [
  {
    path: "/",
    element: <App />,
  },
];
vehicles.forEach((vehicle) => {
  routes.push({
    path: vehicle.name,
    element: <VehicleView vehicle={vehicle}/>
  });
});

const router = createBrowserRouter(routes);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
); 


function Componente ({titulo, children}) {
  return (
    
    <div>
      <div className="fondo1"></div>
      <h1>{titulo}</h1>
      <div>{children}</div>
    </div>
  );
};
ReactDOM.render(<Componente titulo="Título 1">HOLA DESDE MI CASA</Componente>, document.getElementById("root"),
);
