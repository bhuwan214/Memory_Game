import { useState,useEffect } from "react";
import uniqid from "uniqid";

export default function FetchPokemons() {
  const [pokemons, setPokemons] = useState([]);
  const POSSIBLE_POKEMONS = 721; // Up to gen 6

  const getPokemon = async ({ id, shiny }) => {
    const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
    const { name, sprites } = await res.json();
    const image = sprites[shiny ? "front_shiny" : "front_default"];
    return { name, image, id, shiny };
  };
  
  const getRandomPokemons = async (amount) => {
    const pokemonsToShow = [];
    let tries = 0;
    const isFirstVisit = localStorage.getItem("visited") === null;
    if (isFirstVisit) localStorage.setItem("visited", true);

    const shinyChance = isFirstVisit ? 0.45 : 0.1; // Adjusted shiny chance
    while (pokemonsToShow.length < amount && tries < 100) {
      const randomId = Math.floor(Math.random() * POSSIBLE_POKEMONS) + 1;

      const isDuplicateId = pokemonsToShow.find(({ id }) => id === randomId);
      if (isDuplicateId) tries++;
      else pokemonsToShow.push({ id: randomId, shiny: Math.random() < shinyChance });
    }

    return await Promise.all(pokemonsToShow.map(getPokemon));
  };

  function shufflePokemons() {
    const availableCards = [...pokemons];
    const shuffledPokemons = [];
    while (availableCards.length) {
      const index = Math.floor(Math.random() * availableCards.length);
      const card = availableCards[index];
      // Need to give a new key/uniqid for react to detect a rerender
      card.id = uniqid();
      shuffledPokemons.push(card);
      availableCards.splice(index, 1);
    }
    setPokemons(shuffledPokemons);
  }  useEffect(() => {
    const fetchInitialPokemon = async () => {
      const initialPokemon = await getRandomPokemons(25);
      setPokemons(initialPokemon);
    };
    fetchInitialPokemon();
  }, []);

  return { pokemons, getRandomPokemons, shufflePokemons, setPokemons };
}

