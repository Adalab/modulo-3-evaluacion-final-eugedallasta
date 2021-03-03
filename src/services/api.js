const getInfoFromApi = () => {
  return fetch(
    "https://raw.githubusercontent.com/Adalab/rick-y-morty/master/data/rick-y-morty.json"
  )
    .then((response) => response.json())

    .then((data) => {
      return data.results.map((eachCharacter) => {
        return {
          id: eachCharacter.id,
          name: eachCharacter.name,
          status: eachCharacter.status,
          specie: eachCharacter.species,
          origin: eachCharacter.origin.name,
          image: eachCharacter.image,
          episodes: eachCharacter.episode.length,
          gender: eachCharacter.gender,
        };
      });
    });
};
export default getInfoFromApi;
