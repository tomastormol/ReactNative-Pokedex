import React from "react";
import { View, Text, StyleSheet } from "react-native";
import Damage from "./Damage";
import Stats from "./Stats";

const BottomDetails = ({ pokemon, showDamage, showStats, showEvolution }) => {
    return (
        <View style={styles.container}>
            {showDamage && (
                <Damage pokemonId={pokemon.id} />
            )}
            {showStats && (
                <View style={styles.content}>
                    <Stats pokemon={pokemon} />
                </View>
            )}
            {showEvolution && (
                <View style={styles.content}>
                    <Text style={styles.contentText}>Evolution for {pokemon.name}</Text>
                </View>
            )}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-start',
        padding: 16,
    },
    content: {
        padding: 16,
    },
    contentText: {
        fontSize: 18,
        color: '#333',
    },
});

export default BottomDetails;
