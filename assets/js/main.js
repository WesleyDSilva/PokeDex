const offset = 0;
const limit = 10;

const url = `https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`;

function convertPokemonTypesToLi(pokemonTypes) {
  return pokemonTypes.map(
    (typeSlot) => `<li class="type">${typeSlot.type.name}</li>`
  );
}

function convertPokemonToLi(pokemon) {
  return `
        <li class="pokemon">
          <span class="number">#${pokemon.order}</span>
          <span class="name">${pokemon.name}</span>

          <div class="detail">
            <ol class="types">
              ${convertPokemonTypesToLi(pokemon.types).join("")}
            </ol>
            <img
            src="${pokemon.sprites.other.dream_world.front_default}"
              src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/1.svg"
              alt="${pokemon.name}"
            />
          </div>
        </li>  
    `;
}

//console.log(document.getElementsByClassName("pokemons"));
//console.log(document.getElementById("pokemonList"));
const pokemonList = document.getElementById("pokemonList");
//pokemonList.innerHTML += "<li>Teste</li>";

pokeApi.getPokemons().then((pokemons = []) => {
  pokemonList.innerHTML += pokemons.map(convertPokemonToLi).join("");
});

/*
pokeApi.getPokemons().then((pokemons) => {
  const newList = pokemons.map((pokemon) => {
    return convertPokemonToLi(pokemon);
  });

  const newHtml = newList.join("");

  pokemonList.innerHTML += newHtml;
});
*/
/*
  const listItems = [];

  for (let i = 0; i < pokemons.length; i++) {
    const pokemon = pokemons[i];
    pokemonList.innerHTML += convertPokemonToLi(pokemon);
    listItems.push(convertPokemonToLi(pokemon));
  }

  console.log(listItems);
});
*/

/*
fetch(url)
  .then((response) => response.json())
  .then((jsonBody) => jsonBody.results)
  .then((pokemonList) => {
    for (let i = 0; i < pokemonList.length; i++) {
      const pokemon = pokemonList[i];
      console.log(convertPokemonToLi(pokemon));
      document.getElementById("pokemons");
    }
  })
  .catch((error) => console.error(error));
*/
/*

fetch(url)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonBody) {
    console.log(jsonBody);
  })
  .catch(function (error) {
    console.error(error);
  })
  .finally(function () {
    console.log("Requisição concluída!");
  });
  */

/*
    fetch(url)
  .then((response) => response.json())

  .then((jsonBody) => {
    debugger;
    console.log(jsonBody);
  })
  .catch((error) => console.error(error));
  
  
  
*/
