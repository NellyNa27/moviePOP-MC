import "./Card.css";
import { Link } from "react-router-dom";

function Card({title = "Título por defecto",
  description = "Descripción por defecto"})
   {
  return (
    <div className="Card">
      <Link to={title}><h3>{title} </h3> </Link>
      <p>{description}</p>
    </div>
  );
}

export default Card;
