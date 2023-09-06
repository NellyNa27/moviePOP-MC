import "./App.css";
import Card from "./Components/Card";
//import ShowHide from "./Components/showHide";
import vehicles from "./data/vehicles.js";

function AppHome() {
  const vehicleList = vehicles.map((v) => {
    return <Card title={v.name} description={v.description} />;
  });

  return (
    <div className="AppHome">
      <h1>MOVIE POP</h1>
      <div className="container">
        {vehicleList}</div>

    </div>
  );
}

export default AppHome;
