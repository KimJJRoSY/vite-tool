import { type PokemonData } from "./type";

const END_POINT = "https://pokeapi.co/api/v2/pokemon/3";
// fetchData 함수를 만들고 타입 지정

const fetchData = async (): Promise<PokemonData> => {
  const response = await fetch(END_POINT);
  const data = await response.json();
  return data;
};
fetchData();

//createCard
const createCard = ({
  sprites,
  name,
}: Pick<PokemonData, "sprites" | "name">): string => {
  const tag = `
    <div class="card">
      <img src="${sprites["front_default"]}" alt="${name}"/>
      <h2>${name}</h2>
  </div>
  `;
  return tag;
};

//renderCard

const renderCard = (target: HTMLElement | null, data: PokemonData): void => {
  // target이 있으면 수행 , 없으면 수행하지 않음 -> 옵셔널 체이닝
  // target?.insertAdjacentHTML("beforeend", createCard(data));

  // 논리곱 연산자
  // target이 false면 && 뒤에 요소 반환 안 함
  target && target.insertAdjacentHTML("beforeend", createCard(data));
};

function fetchPokemon() {
  const arr: Promise<PokemonData>[] = [];

  // 배열 반복문을 사용하기 위해서 미리 null 로 채운 배열 만듦
  Array(10)
    .fill(null)
    .forEach((_, i) => {
      const url = `https://pokeapi.co/api/v2/pokemon/${i + 1}`; // 인덱스는 0, 포켓몬은 1이라서
      arr.push(fetch(url).then((res) => res.json())); // <Promise>
    });

  return arr;
}

function createPokemonObject(arr: Promise<PokemonData>[]) {
  let pokemon: unknown;

  pokemon = Promise.all(arr).then((all) => {
    all.map((p) => {
      return {
        name: p.name,
        image: p.sprites["front_default"],
      };
    });
  });

  return pokemon;
}

// [Promise,Promise,Promise,Promise,Promise,Promise,Promise,Promise,Promise,Promise]

createPokemonObject(fetchPokemon());
