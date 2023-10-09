import { Text, View, Image, TouchableOpacity } from "react-native";
import React from 'react'
import styles from '../styles/Card'
import { cardColors, boxTypesColors } from '../assets/theme'

export default Card = ({ pokemon }) => {

    return (
        <TouchableOpacity >

            <View style={[styles.pokemonCard, { backgroundColor: cardColors[pokemon.types[0].type.name] }]}>
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
                                <Text style={[styles.pokemonType, { backgroundColor: boxTypesColors[type.type.name] }]}>
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
        </TouchableOpacity>
    );
}