import React from "react";
import {
  View,
  FlatList,
  ActivityIndicator,
  Text
} from "react-native";
import Card from "../Card/Card";

export default function PokemonList({ isLoading, isError, pokemons, navigation }) {
  if (isLoading) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <ActivityIndicator size="large" color="#0071DC" />
      </View>
    );
  }

  if (isError) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text>Error fetching data... Please check your internet connection</Text>
      </View>
    );
  }

  return (
    <FlatList
      style={{ marginTop: 10 }}
      showsVerticalScrollIndicator={false}
      data={pokemons}
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
  );
}
