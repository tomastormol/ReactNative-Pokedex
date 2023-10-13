import { View, Text, Image } from 'react-native'
import React from 'react'
import { cardColors, boxTypesColors } from '../assets/theme'
import styles from './styles'
import cardStyles from '../Card/styles'
import { useTypeImage } from '../utils/useTypeImage'

export default function TopDetails({ pokemon }) {

    const { switchTypeImage } = useTypeImage()

    return (
        <View style={[styles.topDetailsContainer, { backgroundColor: cardColors[pokemon.types[0].type.name] }]}>
            <Image
                style={styles.pokemonImage}
                source={{
                    uri: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemon.id}.png`,
                }}
            />
            <View style={cardStyles.pokemonCardLeft}>
                <Text style={cardStyles.pokemonID}>
                    {pokemon.id < 100 ? <Text style={cardStyles.pokemonID}>#00{pokemon.id}</Text> : <Text style={cardStyles.pokemonID}>#{pokemon.id}</Text>}
                </Text>
                <Text style={cardStyles.pokemonName}>
                    {pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}
                </Text>
                <View style={cardStyles.pokemonTypes}>
                    {pokemon?.types.map((type, index) => {
                        return (
                            <View key={index} style={[cardStyles.pokemonType, { backgroundColor: boxTypesColors[type.type.name] }]}>
                                {switchTypeImage(type.type.name)}
                                <Text style={cardStyles.pokemonTypeText}>
                                    {type.type.name}
                                </Text>
                            </View>
                        )
                    })}
                </View>
            </View>
        </View>
    )
}