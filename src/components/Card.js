import "../stylesheets/components/Card.scss";
import { Link } from "react-router-dom";

function Card(props) {
  return (
    <article className="main__list-article">
      <Link to={`/character/${props.character.id}`}>
        <img
          className="main__list-articleImg"
          src={props.character.image}
          alt={`Foto de ${props.character.name}`}
          title={`Foto de ${props.character.name}`}
        />
        <h2 className="main__list-articleName">
          Name: {props.character.name}
        </h2>
        <h3 className="main__list-articleSpecie">
          Specie: {props.character.specie}
        </h3>
      </Link>
    </article>
  );
}

export default Card;
