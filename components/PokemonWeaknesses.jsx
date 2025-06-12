import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { useTypeImage } from '../utils/useTypeImage';
import cardStyles from '../Card/styles';
import { boxTypesColors } from '../assets/theme';

const allTypes = [
  'normal', 'fire', 'water', 'electric', 'grass', 'ice', 'fighting', 'poison',
  'ground', 'flying', 'psychic', 'bug', 'rock', 'ghost', 'dragon', 'dark',
  'steel', 'fairy'
];

const PokemonWeaknesses = ({ pokemonId }) => {
  const [weaknesses, setWeaknesses] = useState([]);
  const { switchTypeImage } = useTypeImage();

  useEffect(() => {
    const fetchWeaknesses = async () => {
      try {
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonId}`);
        const data = await response.json();

        const typeUrls = data.types.map(t => t.type.url);
        const typeData = await Promise.all(typeUrls.map(url => fetch(url).then(res => res.json())));

        const effectiveness = {};
        allTypes.forEach(type => {
          effectiveness[type] = 1;
        });

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
          .map(([type, multiplier]) => ({ type, multiplier }));

        const sortPriority = {
          4: 0,
          2: 1,
          1: 2,
          0.5: 3,
          0: 4,
        };

        realWeaknesses.sort((a, b) => {
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

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.gridContainer} showsVerticalScrollIndicator={false}>
        {weaknesses.map(({ type, multiplier }, index) => (
          <View
            key={index}
            style={[
              cardStyles.pokemonType,
              {
                backgroundColor: boxTypesColors[type],
                justifyContent: 'center',
                alignItems: 'center',
                margin: 6,
                width: 150
              },
            ]}
          >
            {switchTypeImage(type)}
            <Text style={cardStyles.pokemonTypeText}>
              {type} ×{multiplier % 1 === 0 ? multiplier : multiplier.toFixed(2)}
            </Text>
          </View>
        ))}
      </ScrollView>
    </View>
  );

};

const styles = StyleSheet.create({
  container: {
    padding: 10,
    marginTop: 10,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  gridContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
});


export default PokemonWeaknesses;
