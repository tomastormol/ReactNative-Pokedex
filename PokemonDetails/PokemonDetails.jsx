import React, { useState } from "react";
import { View, StatusBar } from "react-native";
import BottomDetails from "./BottomDetails";
import TopDetails from "./TopDetails";
import styles from './styles';
import { cardColors } from '../assets/theme'

export default function PokemonDetails({ route }) {
    const [showDamage, setShowDamage] = useState(true);
    const [showStats, setShowStats] = useState(false);
    const [showEvolution, setShowEvolution] = useState(false);

    return (
        <View style={[styles.container, { backgroundColor: cardColors[route.params.pokemon.types[0].type.name] }]}>
            <StatusBar hidden />
            <View style={styles.topDetailsContainer}>
                <TopDetails
                    pokemon={route.params.pokemon}
                    setShowDamage={setShowDamage}
                    setShowStats={setShowStats}
                    setShowEvolution={setShowEvolution}
                    showDamage={showDamage}
                    showStats={showStats}
                    showEvolution={showEvolution}
                />
            </View>
            <View style={styles.bottomDetailsContainer}>
                <BottomDetails
                    pokemon={route.params.pokemon}
                    showDamage={showDamage}
                    showStats={showStats}
                    showEvolution={showEvolution}
                />
            </View>
        </View>
    );
}
