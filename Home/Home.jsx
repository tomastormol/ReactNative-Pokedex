import React, { useState, useEffect } from "react";
import { SafeAreaView, View, FlatList, TextInput, ActivityIndicator } from "react-native";
import Card from "../components/Card";
import styles from './styles'
import SearchBar from "../components/SearchBar";
import { useFetchPokemons } from "../utils/useFetchPokemons";


export default function Home() {

    const { pokemonsList, pokemonsFilttering, setPokemonsList, isLoading, isError } = useFetchPokemons()

    return (
        <View style={{ padding: 10 }}>
            {isLoading ? (
                <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                    <ActivityIndicator size={"large"} color="#0071DC" />
                </View>
            ) : (
                <View>
                    <SearchBar setPokemonsList={setPokemonsList} pokemonsFilttering={pokemonsFilttering} />
                    <FlatList
                        data={pokemonsList}
                        keyExtractor={(item) => item.name}
                        renderItem={({ item }) => <Card pokemon={item} />}
                    />
                </View>
            )}
            {isError && (
                <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                    <Text>Error fetching data... Please check your internet connection</Text>
                </View>
            )}

        </View>
    );
}