import React from "react";
import logoPop from "./img/logoPop.png";
import cuadroR from "./img/cuadroR.png";
import "./home_page/HomePage.css";

function HomePage() {
    return (
    <div>
        <div className="cuadroR">
        <img src={cuadroR} />
        </div>
        <div className="imgPop">
        <img src={logoPop} />
        </div>
    </div>
    );
}
export default HomePage;
