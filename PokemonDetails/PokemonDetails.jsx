import React, { useState } from "react";
import { View, StatusBar } from "react-native";
import BottomDetails from "./BottomDetails";  // Asegúrate de que la ruta es correcta
import TopDetails from "./TopDetails";  // Asegúrate de que la ruta es correcta
import styles from './styles';  // Asegúrate de que la ruta es correcta
import { cardColors } from '../assets/theme'

export default function PokemonDetails({ route }) {
    const [showAbout, setShowAbout] = useState(true);
    const [showStats, setShowStats] = useState(false);
    const [showEvolution, setShowEvolution] = useState(false);

    return (
        <View style={[styles.container, { backgroundColor: cardColors[route.params.pokemon.types[0].type.name] }]}>
            <StatusBar hidden />
            <View style={styles.topDetailsContainer}>
                <TopDetails
                    pokemon={route.params.pokemon}
                    setShowAbout={setShowAbout}
                    setShowStats={setShowStats}
                    setShowEvolution={setShowEvolution}
                    showAbout={showAbout}
                    showStats={showStats}
                    showEvolution={showEvolution}
                />
            </View>
            <View style={styles.bottomDetailsContainer}>
                <BottomDetails
                    pokemon={route.params.pokemon}
                    showAbout={showAbout}
                    showStats={showStats}
                    showEvolution={showEvolution}
                />
            </View>
        </View>
    );
}
