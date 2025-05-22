import React, { useState, useEffect } from "react";
import {
  View,
  FlatList,
  ActivityIndicator,
  Text,
  Image,
  TouchableOpacity,
  Modal,
} from "react-native";
import SearchBar from "../components/SearchBar";
import { useFetchPokemons } from "../utils/useFetchPokemons";
import styles from "./styles";
import Card from "../Card/Card";
import { SafeAreaView } from "react-native-safe-area-context";
import Filter from "../assets/Images/Filter.png";
import GenerationsFilterView from "../Filters/GenerationsFilterView";

const generationRanges = {
  1: [1, 151],
  2: [152, 251],
  3: [252, 386],
  4: [387, 493],
  5: [494, 649],
  6: [650, 721],
  7: [722, 809],
  8: [810, 898],
};

export default function Home({ navigation }) {
  const {
    pokemonsList: fullList,
    pokemonsFilttering,
    setPokemonsList: setSearchResults,
    isLoading,
    isError,
  } = useFetchPokemons();

  const [showModal, setShowModal] = useState(false);
  const [selectedGenerations, setSelectedGenerations] = useState([]);
  const [filteredList, setFilteredList] = useState([]);

  useEffect(() => {
    if (selectedGenerations.length === 0) {
      setFilteredList(fullList);
    } else {
      const ranges = selectedGenerations.map((gen) => generationRanges[gen]);
      const flat = fullList.filter((pokemon) =>
        ranges.some(
          ([min, max]) => pokemon.id >= min && pokemon.id <= max
        )
      );
      setFilteredList(flat);
    }
  }, [selectedGenerations, fullList]);

  return (
    <SafeAreaView style={styles.container}>
      <View style={{ padding: 10, flex: 1, width: "100%" }}>
        {isLoading && (
          <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
            <ActivityIndicator size="large" color="#0071DC" />
          </View>
        )}

        {!isLoading && isError && (
          <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
            <Text>Error fetching data... Please check your internet connection</Text>
          </View>
        )}

        {!isLoading && !isError && (
          <>
            <View style={{ alignItems: "flex-end", marginBottom: 10 }}>
              <TouchableOpacity onPress={() => setShowModal(true)}>
                <Image source={Filter} />
              </TouchableOpacity>
            </View>

            <SearchBar
              setPokemonsList={setSearchResults}
              pokemonsFilttering={pokemonsFilttering}
            />

            <View style={{ flex: 1 }}>
              <FlatList
                style={{ marginTop: 10 }}
                showsVerticalScrollIndicator={false}
                data={filteredList}
                contentContainerStyle={{ flexGrow: 1 }}
                keyExtractor={(item, index) => item.id?.toString() || index.toString()}
                renderItem={({ item }) =>
                  item && <Card pokemon={item} navigation={navigation} />
                }
                ListEmptyComponent={
                  <View style={{
                    flex: 1,
                    justifyContent: 'center',
                    alignItems: 'center',
                    width: '100%',
                  }}>
                    <Text style={{ fontSize: 16, color: 'gray' }}>No se encontraron Pokémon</Text>
                  </View>
                }
              />
            </View>
          </>
        )}

        <Modal
          animationType="slide"
          transparent={true}
          visible={showModal}
          onRequestClose={() => setShowModal(false)}
        >
          <GenerationsFilterView
            onClose={() => setShowModal(false)}
            selectedGenerations={selectedGenerations}
            onToggleGeneration={(genId) => {
              setSelectedGenerations((prev) =>
                prev.includes(genId)
                  ? prev.filter((id) => id !== genId)
                  : [...prev, genId]
              );
            }}
          />
        </Modal>
      </View>
    </SafeAreaView>
  );
}
