import React from 'react';
import { View, ScrollView, StyleSheet } from 'react-native';
import { usePokemonWeaknesses } from '../hooks/usePokemonWeaknesses';
import WeaknessCard from './WeaknessCard';

const PokemonWeaknesses = ({ pokemonId }) => {
  const weaknesses = usePokemonWeaknesses(pokemonId);

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.gridContainer} showsVerticalScrollIndicator={false}>
        {weaknesses.map(({ type, multiplier }, index) => (
          <WeaknessCard key={index} type={type} multiplier={multiplier} />
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
  gridContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
});

export default PokemonWeaknesses;
