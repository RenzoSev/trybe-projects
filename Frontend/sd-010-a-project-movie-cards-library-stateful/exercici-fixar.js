const containerPokemons = document.querySelector('#container-pokemons');
const pokemons = ['charizard', 'dragonite', 'pikachu', 'snorlax', 'rayquaza'];

function createPokemonElement({ name, sprites }) {
  const divPokemon = document.createElement('div');
  const imagePokemon = document.createElement('img');
  const titlePokemon = document.createElement('p');

  titlePokemon.innerText = name;
  imagePokemon.src = sprites.front_default;
  divPokemon.id = 'container-pokemon';

  divPokemon.appendChild(imagePokemon);
  divPokemon.appendChild(titlePokemon);
  containerPokemons.appendChild(divPokemon);
}

function fetchPokemon(pokemon) {
  return new Promise((resolve, reject) => {
    if (pokemon) {
      fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`)
        .then((response) => response.json())
        .then((data) => resolve(data));
    } else {
      reject(new Error('Falha ao buscar pelo pokemon escolhido :('));
    }
  });
}

async function getPokemon(pokemon) {
  const dataPokemon = await fetchPokemon(pokemon);
  createPokemonElement(dataPokemon);
}

pokemons.forEach((pokemon) => getPokemon(pokemon));
