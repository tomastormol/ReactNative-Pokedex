import React from "react";
import { View, FlatList, ActivityIndicator, SafeAreaView } from "react-native";
import Card from "../components/Card";
import SearchBar from "../components/SearchBar";
import { useFetchPokemons } from "../utils/useFetchPokemons";
import styles from './styles'

export default function Home({ navigation }) {

    const { pokemonsList, pokemonsFilttering, setPokemonsList, isLoading, isError } = useFetchPokemons()

    return (
        <SafeAreaView style={styles.container}>

            <View style={{ padding: 10 }}>
                {isLoading ? (
                    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                        <ActivityIndicator size={"large"} color="#0071DC" />
                    </View>
                ) : (
                    <View>
                        <SearchBar setPokemonsList={setPokemonsList} pokemonsFilttering={pokemonsFilttering} />
                        <FlatList
                            showsVerticalScrollIndicator={false}
                            data={pokemonsList}
                            keyExtractor={(item) => item.name}
                            renderItem={({ item }) => <Card pokemon={item} navigation={navigation} />}
                        />
                    </View>
                )}
                {isError && (
                    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                        <Text>Error fetching data... Please check your internet connection</Text>
                    </View>
                )}

            </View>
        </SafeAreaView>
    );
}