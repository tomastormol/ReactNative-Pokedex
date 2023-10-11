import { Text, View } from 'react-native'
import React, { Component } from 'react'

export default function PokemonDetails({ route }) {

    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text>Name: {route.params.pokemon.name}</Text>
        </View>
    )
}