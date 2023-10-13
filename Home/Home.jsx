import React from "react";
import { View, FlatList, ActivityIndicator, Text } from "react-native";
import SearchBar from "../components/SearchBar";
import { useFetchPokemons } from "../utils/useFetchPokemons";
import styles from './styles'
import Card from "../Card/Card";
import { SafeAreaView } from "react-native-safe-area-context";

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
                            keyExtractor={(item) => item.id}
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