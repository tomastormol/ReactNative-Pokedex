import React from 'react';
import { View, TextInput, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import styles from '../styles/SearchBar'

export default function SearchBar({ setPokemonsList, pokemonsFilttering }) {

    const handlePokemonSearch = (text) => {
        const filteredItems = pokemonsFilttering.filter(item => {
            return item.name.toLowerCase().includes(text.toLowerCase());
        });
        setPokemonsList(filteredItems);
    };

    return (
        <View style={styles.container}>
            <Ionicons name="search" size={20} color="gray" style={styles.icon} />
            <TextInput
                style={styles.textInput}
                placeholder="What Pokémon are you looking for?"
                onChangeText={handlePokemonSearch}
                autoCorrect={false}
                placeholderTextColor="gray"
            />
        </View>
    );
}
