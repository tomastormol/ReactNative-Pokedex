import { Text, View, TextInput } from "react-native";
import React from 'react'
import styles from '../styles/SearchBar'

export default SearchBar = ({ pokemonDetails, setPokemonDetails, pokemonsList }) => {

    const handlePokemonSearch = (text) => {
        if (text) {
            let filteredPokemonList = pokemonDetails.filter((pokemon) => pokemon.name.toLowerCase().includes(text.toLowerCase()))
            setPokemonDetails(filteredPokemonList)
        } else {
            setPokemonDetails(pokemonsList);
        }
    }

    return (
        <View style={styles.container}>
            <TextInput style={styles.textInput} placeholder="Search Pokemon"
                onChangeText={(text) => {
                    handlePokemonSearch(text)
                }} />
        </View>
    );
}