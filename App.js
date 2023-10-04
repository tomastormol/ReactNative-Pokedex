import { StatusBar } from "expo-status-bar";
import React, { useState, useCallback, useEffect } from "react";
import { StyleSheet, Text, View, FlatList, Image, TextInput } from "react-native";
import Card from "./components/Card";

const url = "https://pokeapi.co/api/v2/"
const options = "pokemon?limit=151&offset=0";
const urlPath = `${url}${options}`

export default function App() {
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
      <StatusBar style="auto" />
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    marginTop: 60,
  },
  title: {
    fontSize: 38,
    alignSelf: "center",
    marginBottom: 20,
  },
  pokemonContainer: { backgroundColor: "lightgrey", marginTop: 10 },
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