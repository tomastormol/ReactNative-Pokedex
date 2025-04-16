import { View, Text } from 'react-native'
import React from 'react'
import PokemonWeaknesses from '../components/PokemonWeaknesses'

export default function About() {
    return (
        <View>
            <PokemonWeaknesses pokemonId={1} />
        </View>
    )
}