import { Text, View } from 'react-native'
import React from 'react'
import styles from './styles'
import { cardColors } from '../assets/theme'
import { StatusBar } from 'expo-status-bar'
import TopDetails from './TopDetails';
import BottomDetails from './BottomDetails'

export default function PokemonDetails({ route }) {

    return (
        <View style={[styles.container, { backgroundColor: cardColors[route.params.pokemon.types[0].type.name] }]}>
            <StatusBar hidden />
            <TopDetails pokemon={route.params.pokemon} />
            <BottomDetails pokemon={route.params.pokemon} />
        </View>
    )
}