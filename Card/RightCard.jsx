import { View, Image } from 'react-native'
import React from 'react'
import styles from './styles'
import pokeball from '../assets/Images/Pokeball.png'

export default RightCard = ({ pokemon }) => {
    return (
        <View style={styles.pokemonCardRight}>
            <Image
                style={styles.pokemonRightImageCard}
                source={pokeball}
            />
            <Image
                style={styles.pokemonImage}
                source={{
                    uri: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemon.id}.png`,
                }}
            />
        </View>
    )
}