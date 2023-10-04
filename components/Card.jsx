import { Text, View, Image } from "react-native";
import React from 'react'
import styles from '../styles/Card'

export default Card = ({ pokemon }) => {

    return (
        <View style={styles.pokemonCard}>
            <View style={styles.pokemonCardLeft}>
                <Text style={styles.pokemonID}>
                    #{pokemon.id}
                </Text>
                <Text style={styles.pokemonName}>
                    {pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}
                </Text>
                <View style={styles.pokemonTypes}>
                    {pokemon?.types.map((type) => {
                        return (
                            <Text style={styles.pokemonType}>
                                {type.type.name}
                            </Text>
                        )
                    })}
                </View>
            </View>
            <View style={styles.pokemonCardRight}>
                <Image
                    style={styles.pokemonImage}
                    source={{
                        uri: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemon.id}.png`,
                    }}
                />
            </View>
        </View>
    );
}