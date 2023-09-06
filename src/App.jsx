import React from "react";
import logoPop from "./img/logoPop.png";
import cuadroR from "./img/cuadroR.png";
import "./App.css";

function App() {
    return (
    <div>
        <div className="cuadroR">
        <img src={cuadroR} />{" "}
        </div>
        <div className="imgPop">
        <img src={logoPop} />{" "}
        </div>
    </div>
    );
}
export default App;
