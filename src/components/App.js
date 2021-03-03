import Header from "./Header";
import Filter from "./Filter";
import Button from "./Button";
import CardDetail from "./CardDetail";
import List from "./List";
import Footer from "./Footer";
import getInfoFromApi from "../services/api";
import React, { useEffect, useState } from "react";
import { Route, Switch } from "react-router-dom";

const App = () => {
  //Definimos estado de array (limpio) que recibo del Api
  const [characters, setCharacters] = useState([]);
  const [name, setName] = useState("");
  const [gender, setGender] = useState("All");
  useEffect(() => {
    getInfoFromApi().then((data) => setCharacters(data));
  }, []);

  //Escuchar eventos del input (Componente Filter) AQUI LLEGAMOS
  const handleInputChange = (inputChange) => {
    if (inputChange.key === "name") {
      setName(inputChange.value);
    } else if (inputChange === "gender") {
      setGender(inputChange.value);
    }
  };

  const filterCharacters = characters
    .filter((character) => {
      return character.name.toUpperCase().includes(name.toUpperCase());
    })
    .filter((character) => {
      if (gender === "All") {
        return true;
      } else {
        return character.gender === gender;
      }
    });

  //Funcion Render CardDetail
  const renderDetail = (props) => {
    const id = props.match.params.id;
    const selectCharacter = characters.find((character) => {
      return character.id === id;
    });
    return <CardDetail character={selectCharacter} />;
  };

  return (
    <>
      <Header />
      <main>
        <Filter handleInputChange={handleInputChange} />
        <List characters={filterCharacters} />
        <Button />
        <CardDetail />
      </main>
      <Footer />
      <Switch>
        <Route path="/character/:id" render={renderDetail} />
      </Switch>
    </>
  );
};
export default App;
