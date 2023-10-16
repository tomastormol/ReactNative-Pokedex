import { Text, View } from 'react-native'
import React, { useState } from 'react'
import styles from './styles'
import { cardColors } from '../assets/theme'
import { StatusBar } from 'expo-status-bar'
import TopDetails from './TopDetails';
import BottomDetails from './BottomDetails'

export default function PokemonDetails({ route }) {

    const [showAbout, setShowAbout] = useState(false)
    const [showStats, setShowStats] = useState(true)
    const [showEvolution, setShowEvolution] = useState(false)

    return (
        <View style={[styles.container, { backgroundColor: cardColors[route.params.pokemon.types[0].type.name] }]}>
            <StatusBar hidden />
            <TopDetails pokemon={route.params.pokemon} setShowAbout={setShowAbout} setShowStats={setShowStats} setShowEvolution={setShowEvolution} />
            <BottomDetails pokemon={route.params.pokemon} showAbout={showAbout} showStats={showStats} showEvolution={showEvolution} />
        </View>
    )
}