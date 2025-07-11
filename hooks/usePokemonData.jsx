import { View, Text, Image } from 'react-native'
import React from 'react'
import styles from '../utils/styles'
import dotsImage from '../assets/Images/DotsImage.png'
import { boxTypesColors } from '../assets/theme'
import { useTypeImage } from '../utils/useTypeImage'
export const usePokemonData = () => {

    const pokemonData = () => {

        const { switchTypeImage } = useTypeImage()

        return (
            <View style={styles.pokemonCardLeft}>
                <Text style={styles.pokemonID}>
                    #{pokemon.id}
                </Text>
                <Text style={styles.pokemonName}>
                    {pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}
                </Text>
                <Image
                    style={styles.pokemonLeftImageCard}
                    source={dotsImage}
                />
                <View style={styles.pokemonTypes}>
                    {pokemon?.types.map((type, index) => {
                        return (
                            <View key={index} style={[styles.pokemonType, { backgroundColor: boxTypesColors[type.type.name] }]}>
                                {switchTypeImage(type.type.name)}
                                <Text style={styles.pokemonTypeText}>
                                    {type.type.name}
                                </Text>
                            </View>
                        )
                    })}
                </View>
            </View>
        )
    }

    return { pokemonData }

}