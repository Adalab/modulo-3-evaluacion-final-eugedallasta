import "../stylesheets/components/List.scss";
import Card from "./Card";

const List = (props) => {
  const listElement = props.characters.map((character) => {
    return (
      <li className="main__list-item" key={character.id}>
        <Card character={character} />
      </li>
    );
  });
  return <ul className="main__list">{listElement}</ul>;
};

export default List;
