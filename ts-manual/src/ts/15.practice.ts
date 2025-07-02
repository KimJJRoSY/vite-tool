import { type PokemonData } from "./type";

const END_POINT = "https://pokeapi.co/api/v2/pokemon/3";
// fetchData 함수를 만들고 타입 지정

const fetchPokemonData = async (): Promise<PokemonData> => {
  const response = await fetch(END_POINT);
  const data = await response.json();
  return data;
};
fetchPokemonData();
