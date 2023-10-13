import { Text, View } from 'react-native'
import React from 'react'
import styles from './styles'

import { StatusBar } from 'expo-status-bar'
import TopDetails from './TopDetails';

export default function PokemonDetails({ route }) {

    return (
        <View style={styles.container}>
            <StatusBar hidden />
            <TopDetails pokemon={route.params.pokemon} />
            <View style={{ flex: 2 }}>
                <Text>Test</Text>
            </View>
        </View>
    )
}