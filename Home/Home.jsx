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
            <View style={{ padding: 10, flex: 1 }}>
                {isLoading && (
                    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                        <ActivityIndicator size="large" color="#0071DC" />
                    </View>
                )}

                {!isLoading && isError && (
                    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                        <Text>Error fetching data... Please check your internet connection</Text>
                    </View>
                )}

                {!isLoading && !isError && (
                    <>
                        <SearchBar setPokemonsList={setPokemonsList} pokemonsFilttering={pokemonsFilttering} />
                        <FlatList
                            style={{ marginTop: 20 }}
                            showsVerticalScrollIndicator={false}
                            data={pokemonsList}
                            keyExtractor={(item, index) => item.id?.toString() || index.toString()}
                            renderItem={({ item }) => item && <Card pokemon={item} navigation={navigation} />}
                        />
                    </>
                )}
            </View>
        </SafeAreaView>


    );
}