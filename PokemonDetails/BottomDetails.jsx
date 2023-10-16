import { View, Text, Image } from 'react-native'
import React from 'react'
import styles from './styles'
import About from './About'
import Evolution from './Evolution'
import Stats from './Stats'

export default function BottomDetails({ pokemon, showAbout, showStats, showEvolution }) {

    return (
        <View style={styles.bottomDetailsContainer}>
            {(!showAbout && !showStats) && <Evolution />}
            {(showAbout && !showStats) && <About />}
            {(!showAbout && showStats) && <Stats />}
        </View>
    )
}