import { useState, useEffect } from 'react';

const allTypes = [
  'normal', 'fire', 'water', 'electric', 'grass', 'ice', 'fighting', 'poison',
  'ground', 'flying', 'psychic', 'bug', 'rock', 'ghost', 'dragon', 'dark',
  'steel', 'fairy'
];

const sortPriority = {
  4: 0,
  2: 1,
  1: 2,
  0.5: 3,
  0: 4,
};

export const usePokemonWeaknesses = (pokemonId) => {
  const [weaknesses, setWeaknesses] = useState([]);

  useEffect(() => {
    const fetchWeaknesses = async () => {
      try {
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonId}`);
        const data = await response.json();

        const typeUrls = data.types.map(t => t.type.url);
        const typeData = await Promise.all(typeUrls.map(url => fetch(url).then(res => res.json())));

        const effectiveness = Object.fromEntries(allTypes.map(type => [type, 1]));

        typeData.forEach(typeInfo => {
          typeInfo.damage_relations.double_damage_from.forEach(({ name }) => {
            effectiveness[name] *= 2;
          });
          typeInfo.damage_relations.half_damage_from.forEach(({ name }) => {
            effectiveness[name] *= 0.5;
          });
          typeInfo.damage_relations.no_damage_from.forEach(({ name }) => {
            effectiveness[name] *= 0;
          });
        });

        const realWeaknesses = Object.entries(effectiveness)
          .map(([type, multiplier]) => ({ type, multiplier }))
          .sort((a, b) => {
            const aKey = sortPriority[a.multiplier] ?? 5;
            const bKey = sortPriority[b.multiplier] ?? 5;
            return aKey - bKey;
          });

        setWeaknesses(realWeaknesses);
      } catch (error) {
        console.error('Error fetching weaknesses:', error);
      }
    };

    fetchWeaknesses();
  }, [pokemonId]);

  return weaknesses;
};
