import React from "react";
import { View, Text, StyleSheet } from "react-native";
import About from "./About";

const BottomDetails = ({ pokemon, showAbout, showStats, showEvolution }) => {
    return (
        <View style={styles.container}>
            {showAbout && (
                <About />
            )}
            {showStats && (
                <View style={styles.content}>
                    <Text style={styles.contentText}>Stats for {pokemon.name}</Text>
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
