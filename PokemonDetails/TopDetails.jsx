import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { boxTypesColors } from '../assets/theme'
import styles from './styles'
import cardStyles from '../Card/styles'
import { useTypeImage } from '../utils/useTypeImage'

export default function TopDetails({ pokemon, setShowAbout, setShowStats, setShowEvolution }) {

    const { switchTypeImage } = useTypeImage()

    return (
        <View style={styles.topDetailsContainer}>
            <View style={styles.topDetailsContainerTop}>
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
            <View style={styles.topDetailsContainerBotton}>
                <TouchableOpacity><Text style={styles.topDetailsContainerBottonText} onPress={() => setShowAbout(true)}>About</Text></TouchableOpacity>
                <TouchableOpacity><Text style={styles.topDetailsContainerBottonText} onPress={() => setShowStats(true)}>Stats</Text></TouchableOpacity>
                <TouchableOpacity><Text style={styles.topDetailsContainerBottonText} onPress={() => setShowEvolution(true)}>Evolution</Text></TouchableOpacity>
            </View>
        </View>
    )
}