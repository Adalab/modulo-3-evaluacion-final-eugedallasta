import PropTypes from "prop-types";
import "../stylesheets/components/CardDetail.scss";
import { Link } from "react-router-dom";

function CardDetail(props) {
  return (
    <article className="main__detail">
      <Link className="main__detail-link" title="Volver a resultados" to="/">
        Volver
      </Link>
      <img
        className="main__detail-img"
        src={props.character.image}
        alt={`Foto de ${props.character.name}`}
      />
      <ul>
        <li>Name:{props.character.name} </li>
        <li>Gender:{props.character.gender} </li>
        <li>Specie:{props.character.specie} </li>
        <li>Origin: {props.character.origin}</li>
        <li>Episodes:{props.character.episodes}</li>
        <li>Status:{props.character.status}</li>
      </ul>
    </article>
  );
}

CardDetail.propTypes = {
  characters: PropTypes.array,
  match: PropTypes.object,
};

export default CardDetail;
