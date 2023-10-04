import { StyleSheet, Text, View, Image } from "react-native";
import React, { Component } from 'react'

export default Card = ({ pokemon }) => {

    return (
        <View style={styles.pokemonContainer}>
            <Text style={styles.pokemonTitle}>
                {pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}
            </Text>
            <Image
                style={styles.pokemonSprite}
                source={{
                    uri: pokemon.sprites.front_default,
                }}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    pokemonContainer:
    {
        backgroundColor: "lightgrey",
        marginTop: 10
    },
    pokemonTitle: {
        fontSize: 32,
        alignSelf: "center",
        marginTop: 10,
    },
    pokemonSprite: {
        width: 200,
        height: 200,
        alignSelf: "center",
    },
});