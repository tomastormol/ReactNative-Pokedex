import { View, TouchableOpacity, Image } from "react-native";
import React from 'react'
import styles from './styles'
import { cardColors } from '../assets/theme'
import LeftCard from "./LeftCard";
import RightCard from "./RightCard";

export default Card = ({ pokemon, navigation }) => {

    return (
        <TouchableOpacity
            onPress={() => { navigation.navigate('PokemonDetails', { pokemon: pokemon }) }}
        >
            <View style={[styles.pokemonCard, { backgroundColor: cardColors[pokemon.types[0].type.name] }]}>
                <LeftCard pokemon={pokemon} />
                <RightCard pokemon={pokemon} />
            </View>
        </TouchableOpacity>
    );
}