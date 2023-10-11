import { View, Text, Image } from 'react-native'
import React from 'react'
import styles from './styles'
import dotsImage from '../assets/Images/DotsImage.png'
import { boxTypesColors } from '../assets/theme'
import grass from '../assets/Images/TypesImages/grass.png'
import poison from '../assets/Images/TypesImages/poison.png'
import fire from '../assets/Images/TypesImages/fire.png'

export default LeftCard = ({ pokemon }) => {

    const TypeImage = (type) => {
        switch (type) {
            case 'grass':
                return (
                    <View style={styles.pokemonTypeImage}>
                        <Image source={grass} />
                    </View>
                );
            case 'poison':
                return (
                    <View style={styles.pokemonTypeImage}>
                        <Image source={poison} />
                    </View>
                );
            case 'fire':
                return (
                    <View style={styles.pokemonTypeImage}>
                        <Image source={fire} />
                    </View>
                );
        }
    }

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
                {pokemon?.types.map((type) => {
                    return (
                        <View style={[styles.pokemonType, { backgroundColor: boxTypesColors[type.type.name] }]}>
                            {TypeImage(type.type.name)}
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