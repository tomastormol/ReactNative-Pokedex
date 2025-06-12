import React, { useState } from 'react';
import { View, TextInput, StyleSheet, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import styles from '../styles/SearchBar';

export default function SearchBar({ setPokemonsList, pokemonsFilttering }) {
    const [searchText, setSearchText] = useState('');

    const handlePokemonSearch = (text) => {
        setSearchText(text);

        const filteredItems = pokemonsFilttering.filter(item =>
            item.name.toLowerCase().includes(text.toLowerCase())
        );
        setPokemonsList(filteredItems);
    };

    const handleClearSearch = () => {
        setSearchText('');
        setPokemonsList(pokemonsFilttering); // Restaurar lista original
    };

    return (
        <View style={styles.container}>
            <Ionicons name="search" size={20} color="gray" style={styles.icon} />
            <TextInput
                style={styles.textInput}
                placeholder="What Pokémon are you looking for?"
                onChangeText={handlePokemonSearch}
                value={searchText}
                autoCorrect={false}
                placeholderTextColor="gray"
            />
            {searchText.length > 0 && (
                <TouchableOpacity onPress={handleClearSearch} style={styles.clearIcon}>
                    <Ionicons name="close-circle" size={26} color="gray" />
                </TouchableOpacity>
            )}
        </View>
    );
}
