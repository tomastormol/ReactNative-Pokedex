import React, { useState, useEffect } from "react";
import { SafeAreaView, View, FlatList, TextInput } from "react-native";
import Card from "../components/Card";
import styles from './styles'
import SearchBar from "../components/SearchBar";
import { useFetchPokemons } from "../utils/useFetchPokemons";


export default function Home() {

    const { pokemonsList, pokemonsFilttering, setPokemonsList, setIsLoading, isLoading, isError } = useFetchPokemons()

    return (
        <View style={{ padding: 10 }}>
            <SearchBar setPokemonsList={setPokemonsList} pokemonsFilttering={pokemonsFilttering} />
            <FlatList
                data={pokemonsList}
                keyExtractor={(item) => item.name}
                renderItem={({ item }) => <Card pokemon={item} />}
            />
        </View>
    );
}