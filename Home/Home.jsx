import React, { useState, useEffect } from "react";
import { View, Modal, StatusBar } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import styles from "./styles";

import FilterButton from "../components/FilterButton";
import SearchBar from "../components/SearchBar";
import PokemonList from "../components/PokemonList";
import GenerationsFilterView from "../Filters/GenerationsFilterView";
import TypesFilterView from "../Filters/TypesFilterView";

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

  const [showTypesModal, setShowTypesModal] = useState(false);
  const [selectedTypes, setSelectedTypes] = useState([]);

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar hidden />
      <View style={{ padding: 10, flex: 1, width: "100%" }}>
        <View style={{ flexDirection: "row", justifyContent: "flex-end", gap: 10, marginBottom: 10 }}>
          <FilterButton onPress={() => setShowModal(true)} />
          <FilterButton onPress={() => setShowTypesModal(true)} />
        </View>

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

        {/* Filtro por generación */}
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

        {/* Filtro por tipo */}
        <Modal
          animationType="slide"
          transparent={true}
          visible={showTypesModal}
          onRequestClose={() => setShowTypesModal(false)}
        >
          <TypesFilterView
            selectedTypes={selectedTypes}
            onToggleType={(type) =>
              setSelectedTypes((prev) =>
                prev.includes(type)
                  ? prev.filter((t) => t !== type)
                  : [...prev, type]
              )
            }
            onClose={() => setShowTypesModal(false)}
          />
        </Modal>
      </View>
    </SafeAreaView>
  );
}
