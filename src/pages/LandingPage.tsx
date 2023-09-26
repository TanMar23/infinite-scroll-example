import axios from "axios";
import { useEffect, useState } from "react";

const LandingPage = () => {
  const [characters, setCharacters] = useState<Character[]>();

  useEffect(() => {
    const apiUrl = "https://rickandmortyapi.com/api/character";
    axios
      .get(apiUrl)
      .then((response) => {
        const characterData = response.data.results;
        setCharacters(characterData);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  return (
    <div>
      <h1>Rick and Morty Characters</h1>
      <ul>
        {characters?.map((character) => (
          <li key={character.id}>
            <img src={character.image} alt={character.name} />
            <h2>{character.name}</h2>
            <p>Species: {character.species}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default LandingPage;

interface Character {
  id: number;
  name: string;
  url: string;
  image: string;
  species: string;
}
