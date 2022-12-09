const atualizaTela = (pokemon) => 
{
    const imagem = document.getElementById("pokemon-image");
    const nomePokemon = document.getElementById("pokemon-nomecodigoId");
    imagem.src = pokemon.sprites.other["official-artwork"].front_default;
    nomePokemon.innerHTML = `${pokemon.name} ${pokemon.id}`;
}

const urlPokemonAleatorio = () =>
{
    const numeroSorteado = Math.round(Math.random() * 150) +1;
    const urlPokemon = `https://pokeapi.co/api/v2/pokemon/${numeroSorteado}`; 
    return urlPokemon;
}

const iniciar = async () => {
    const url = urlPokemonAleatorio();
    const response = await fetch(url);
    const result = await response.json();
    atualizaTela(result);
};

document.addEventListener('DOMContentLoaded', iniciar);