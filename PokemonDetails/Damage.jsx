import { View, Text } from 'react-native'
import React from 'react'
import PokemonWeaknesses from '../components/PokemonWeaknesses'

const Damage = ({ pokemonId }) => {
    return (
        <View>
            <PokemonWeaknesses pokemonId={pokemonId} />
        </View>
    )
}

export default Damage