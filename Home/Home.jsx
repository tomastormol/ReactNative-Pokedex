import React, { useState, useEffect } from "react";
import { SafeAreaView, View, FlatList, TextInput } from "react-native";
import Card from "../components/Card";
import styles from './styles'
import SearchBar from "../components/SearchBar";

const url = "https://pokeapi.co/api/v2/"
const options = "pokemon?limit=151&offset=0";
const urlPath = `${url}${options}`

export default function Home() {
    const [pokemonDetails, setPokemonDetails] = useState([])
    const [pokemonsList, setPokemonsList] = useState([])

    useEffect(() => {
        const fetchFirstGenPokemons = async () => {
            const PokemonIdsResponse = await fetch(urlPath);
            const pokemonBody = await PokemonIdsResponse.json();

            const pokemonDetails = await Promise.all(
                pokemonBody.results.map(async (pokemon) => {
                    const pDetails = await fetch(pokemon.url)
                    return await pDetails.json();
                })
            );

            setPokemonDetails(pokemonDetails)
            setPokemonsList(pokemonDetails)
        };

        fetchFirstGenPokemons()
    }, [])

    return (
        <View style={{ padding: 10 }}>
            <SearchBar pokemonDetails={pokemonDetails} setPokemonDetails={setPokemonDetails} pokemonsList={pokemonsList} />
            <FlatList
                data={pokemonDetails}
                renderItem={({ item }) => <Card pokemon={item} />}
            />
        </View>
    );
}