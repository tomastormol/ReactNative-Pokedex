import React from "react";
import { View, Text, StyleSheet } from "react-native";

const BottomDetails = ({ pokemon, showAbout, showStats, showEvolution }) => {
    return (
        <View style={styles.container}>
            {/* Mostrar contenido condicionalmente basado en las pestañas */}
            {showAbout && (
                <View style={styles.content}>
                    <Text style={styles.contentText}>About Pokemon: {pokemon.name}</Text>
                    {/* Aquí mostrarías la información de About */}
                </View>
            )}
            {showStats && (
                <View style={styles.content}>
                    <Text style={styles.contentText}>Stats for {pokemon.name}</Text>
                    {/* Aquí mostrarías las estadísticas del Pokémon */}
                </View>
            )}
            {showEvolution && (
                <View style={styles.content}>
                    <Text style={styles.contentText}>Evolution for {pokemon.name}</Text>
                    {/* Aquí mostrarías la información de evolución */}
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
