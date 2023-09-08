//import "./App.css";
//import Card from "./Components/Card";
//import ShowHide from "./Components/showHide";
//import vehicles from "./data/vehicles.js";
//import LogoPage from "./home_page/logoPage";
//import { useState } from "react";

function App() {
  const [logoPop, setLogo] = useState(true);
  // Esperar 5 segundos para que se vea la principal
  setTimeout(() => {
    setLogo (false);
    }, 5000);

    if (logoPop) {
      return (
        <LogoPage />
        );
    }
  /*const vehicleList = vehicles.map((v) => {
    return <Card title={v.name} description={v.description} />;
  });

  return (
    <div className="AppHome">
      <h1>MOVIE POP</h1>
      <div className="container">
        {vehicleList}</div>

    </div>
  );*/
}

export default App
