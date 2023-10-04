import React, { useState, useEffect } from "react";
import { View, FlatList, TextInput } from "react-native";
import Card from "../components/Card";
import styles from './styles'

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
            <TextInput placeholder="Search Pokemon"
                onChangeText={(text) => {
                    handlePokemonSearch(text)
                }} />
            <FlatList
                data={pokemonDetails}
                renderItem={({ item }) => <Card pokemon={item} />}
            />
        </View>
    );
}