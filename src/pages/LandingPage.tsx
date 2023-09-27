import { listCharacters } from "../services/charactersService";
import { useQuery } from "react-query";

const LandingPage = () => {
  //   const [characters, setCharacters] = useState<ICharacter[]>();
  //   const [isLoading, setIsLoading] = useState<boolean>();
  //   const [error, setError] = useState<string | null>(null);

  //   useEffect(() => {
  //     fetchCharacters();
  //   }, []);

  //   const fetchCharacters = async () => {
  //     setIsLoading(true);
  //     try {
  //       const [response] = await listCharacters({});
  //       setCharacters(response?.results);
  //       setIsLoading(false);
  //       setError(null);
  //       return response;
  //     } catch (error) {
  //       setError(`Hubo un problema: ${error}`);
  //       console.error("Error fetching data:", error);
  //     }
  //   };

  const {
    data: characters,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["characters"],
    staleTime: Infinity,
    queryFn: async () => {
      try {
        const [response] = await listCharacters({});
        return response;
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    },
  });

  return (
    <div>
      <h1>Rick and Morty Characters</h1>
      {error ? (
        <p>Hubo un error</p>
      ) : (
        <div>
          {isLoading ? (
            <p>Cargando...</p>
          ) : (
            <ul>
              {characters?.results.map((character) => (
                <li key={character.id}>
                  <img src={character.image} alt={character.name} />
                  <h2>{character.name}</h2>
                  <p>Species: {character.species}</p>
                </li>
              ))}
            </ul>
          )}
        </div>
      )}
    </div>
  );
};

export default LandingPage;
