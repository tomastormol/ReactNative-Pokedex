import React from 'react';
import { View, Text } from 'react-native';
import { useTypeImage } from '../hooks/useTypeImage';
import { boxTypesColors } from '../assets/theme';
import cardStyles from '../Card/styles';

const WeaknessCard = ({ type, multiplier }) => {
  const { switchTypeImage } = useTypeImage();

  return (
    <View
      style={[
        cardStyles.pokemonType,
        {
          backgroundColor: boxTypesColors[type],
          justifyContent: 'center',
          alignItems: 'center',
          margin: 6,
          width: 75,
        },
      ]}
    >
      {switchTypeImage(type)}
      <Text style={cardStyles.pokemonTypeText}>
        {multiplier % 1 === 0 ? multiplier : multiplier.toFixed(2)}
      </Text>
    </View>
  );
};

export default WeaknessCard;
