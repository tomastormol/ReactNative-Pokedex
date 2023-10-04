import { Text, View, Image } from "react-native";
import React from 'react'
import styles from '../styles/Card'

export default Card = ({ pokemon }) => {

    return (
        <View style={styles.pokemonContainer}>
            <Text style={styles.pokemonTitle}>
                {pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}
            </Text>
            <Image
                style={styles.pokemonSprite}
                source={{
                    uri: pokemon.sprites.front_default,
                }}
            />
        </View>
    );
}