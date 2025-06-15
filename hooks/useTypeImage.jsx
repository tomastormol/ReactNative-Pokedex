import React from 'react'
import { View, Image, StyleSheet } from 'react-native'
import grass from '../assets/Images/TypesImages/grass.png'
import poison from '../assets/Images/TypesImages/poison.png'
import fire from '../assets/Images/TypesImages/fire.png'
import water from '../assets/Images/TypesImages/water.png'
import bug from '../assets/Images/TypesImages/bug.png'
import normal from '../assets/Images/TypesImages/normal.png'
import flying from '../assets/Images/TypesImages/flying.png'
import electric from '../assets/Images/TypesImages/electric.png'
import ground from '../assets/Images/TypesImages/ground.png'
import fairy from '../assets/Images/TypesImages/fairy.png'
import fighting from '../assets/Images/TypesImages/fighting.png'
import psychic from '../assets/Images/TypesImages/psychic.png'
import rock from '../assets/Images/TypesImages/rock.png'
import steel from '../assets/Images/TypesImages/steel.png'
import ice from '../assets/Images/TypesImages/ice.png'
import ghost from '../assets/Images/TypesImages/ghost.png'
import dragon from '../assets/Images/TypesImages/dragon.png'
import dark from '../assets/Images/TypesImages/dark.png'

export const useTypeImage = () => {

    const switchTypeImage = (type) => {
        switch (type) {
            case 'grass':
                return (
                    <View style={styles.pokemonTypeImage}>
                        <Image source={grass} />
                    </View>
                )
            case 'poison':
                return (
                    <View style={styles.pokemonTypeImage}>
                        <Image source={poison} />
                    </View>
                )
            case 'fire':
                return (
                    <View style={styles.pokemonTypeImage}>
                        <Image source={fire} />
                    </View>
                )
            case 'water':
                return (
                    <View style={styles.pokemonTypeImage}>
                        <Image source={water} />
                    </View>
                )
            case 'bug':
                return (
                    <View style={styles.pokemonTypeImage}>
                        <Image source={bug} />
                    </View>
                )
            case 'normal':
                return (
                    <View style={styles.pokemonTypeImage}>
                        <Image source={normal} />
                    </View>
                )
            case 'flying':
                return (
                    <View style={styles.pokemonTypeImage}>
                        <Image source={flying} />
                    </View>
                )
            case 'electric':
                return (
                    <View style={styles.pokemonTypeImage}>
                        <Image source={electric} />
                    </View>
                )
            case 'ground':
                return (
                    <View style={styles.pokemonTypeImage}>
                        <Image source={ground} />
                    </View>
                )
            case 'fairy':
                return (
                    <View style={styles.pokemonTypeImage}>
                        <Image source={fairy} />
                    </View>
                )
            case 'fighting':
                return (
                    <View style={styles.pokemonTypeImage}>
                        <Image source={fighting} />
                    </View>
                )
            case 'psychic':
                return (
                    <View style={styles.pokemonTypeImage}>
                        <Image source={psychic} />
                    </View>
                )
            case 'rock':
                return (
                    <View style={styles.pokemonTypeImage}>
                        <Image source={rock} />
                    </View>
                )
            case 'steel':
                return (
                    <View style={styles.pokemonTypeImage}>
                        <Image source={steel} />
                    </View>
                )
            case 'ice':
                return (
                    <View style={styles.pokemonTypeImage}>
                        <Image source={ice} />
                    </View>
                )
            case 'ghost':
                return (
                    <View style={styles.pokemonTypeImage}>
                        <Image source={ghost} />
                    </View>
                )
            case 'dragon':
                return (
                    <View style={styles.pokemonTypeImage}>
                        <Image source={dragon} />
                    </View>
                )
            case 'dark':
                return (
                    <View style={styles.pokemonTypeImage}>
                        <Image source={dark} />
                    </View>
                )
        }
    }

    return { switchTypeImage }

}

const styles = StyleSheet.create({
    pokemonTypeImage: {
        alignSelf: 'center'
    },
});

