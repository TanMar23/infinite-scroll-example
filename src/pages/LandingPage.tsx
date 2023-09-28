import InfiniteScroll from "react-infinite-scroll-component";

import { useCharacter } from "../hooks/useCharacter";

const LandingPage = () => {
  const { characters, error, fetchNextPage, hasNextPage, status } =
    useCharacter();

  // if (status === "loading") return <Loader />;

  console.log(!!hasNextPage);
  console.log(characters ? characters.results.length : 0);

  if (status === "error") return <h4>Ups!, {`${error}` as string}</h4>;

  return (
    <div>
      <h1 className="title">React Infinite Scroll</h1>
      <InfiniteScroll
        dataLength={characters?.results.length || 0}
        next={fetchNextPage}
        hasMore={!!hasNextPage}
        loader={<p>Cargando mas items</p>}
        endMessage={<p>No more data to load.</p>}
      >
        <ul>
          {characters &&
            characters.results.map((character) => (
              <li key={character.id}>
                <img src={character.image} alt={character.name} />
                <h2>{character.name}</h2>
                <p>Species: {character.species}</p>
              </li>
            ))}
        </ul>
      </InfiniteScroll>
    </div>
  );
};

export default LandingPage;
