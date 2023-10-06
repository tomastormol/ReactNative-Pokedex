import { Text, View, TextInput } from "react-native";
import React from 'react'
import styles from '../styles/SearchBar'

export default SearchBar = ({ setPokemonsList, pokemonsFilttering }) => {

    const handlePokemonSearch = (text) => {
        const filteredItems = pokemonsFilttering.filter(item => {
            return item.name.toLowerCase().includes(text.toLowerCase())
        })
        setPokemonsList(filteredItems)
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