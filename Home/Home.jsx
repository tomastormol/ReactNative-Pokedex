import React, { useState } from "react";
import { View, Modal, StatusBar } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import styles from "./styles";

import FilterButton from "../components/FilterButton";
import SearchBar from "../components/SearchBar";
import PokemonList from "../components/PokemonList";
import GenerationsFilterView from "../Filters/GenerationsFilterView";

import useFilteredPokemons from "../hooks/useFilteredPokemons";
import { useFetchPokemons } from "../hooks/useFetchPokemons";

export default function Home({ navigation }) {
  const {
    pokemonsList,
    pokemonsFilttering,
    setPokemonsList,
    isLoading,
    isError,
  } = useFetchPokemons();

  const {
    filteredList,
    selectedGenerations,
    toggleGeneration,
    showModal,
    setShowModal,
  } = useFilteredPokemons(pokemonsList);

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar hidden />
      <View style={{ padding: 10, flex: 1, width: "100%" }}>
        <FilterButton onPress={() => setShowModal(true)} />
        <SearchBar
          setPokemonsList={setPokemonsList}
          pokemonsFilttering={pokemonsFilttering}
        />
        <PokemonList
          isLoading={isLoading}
          isError={isError}
          pokemons={filteredList}
          navigation={navigation}
        />
        <Modal
          animationType="slide"
          transparent={true}
          visible={showModal}
          onRequestClose={() => setShowModal(false)}
        >
          <GenerationsFilterView
            onClose={() => setShowModal(false)}
            selectedGenerations={selectedGenerations}
            onToggleGeneration={toggleGeneration}
          />
        </Modal>
      </View>
    </SafeAreaView>
  );
}
