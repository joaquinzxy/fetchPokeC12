const formulario = document.getElementById('formInput');
const numberInput = document.getElementById('numberInput');
const pokemonCard = document.getElementById('pokemonContainer');

formulario.addEventListener('submit', (event) => {
  event.preventDefault();
  pokemonCard.innerHTML = '';
  for (let i = 1; i <= numberInput.value; i++) {
    const id = Math.floor(Math.random() * (0 - 1000) + 1000);

    getPokemon(id);
  }
  numberInput.value = '';
});

const getPokemon = async (id) => {
  const request = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
  const data = await request.json();

  const name = data.name;
  const photo = data.sprites.front_default;

  pokemonCard.innerHTML += `
  <div class="pokemonItem">
        <h4>${name.toLocaleUpperCase()}</h4>
        <img src="${photo}" alt="">
    </div>
  
  `;
};
