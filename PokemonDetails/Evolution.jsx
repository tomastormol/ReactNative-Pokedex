import React, { useEffect, useState } from 'react';
import { View, Text, Image, StyleSheet, ActivityIndicator } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const Evolution = ({ pokemon }) => {
    const pokemonId = pokemon.id;
    const [evolutionPairs, setEvolutionPairs] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchEvolutionChain = async () => {
            try {
                const pokemonData = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonId}`).then(res => res.json());
                const speciesData = await fetch(pokemonData.species.url).then(res => res.json());
                const evolutionData = await fetch(speciesData.evolution_chain.url).then(res => res.json());

                const parsed = await parseEvolutionChain(evolutionData.chain);
                setEvolutionPairs(parsed);
            } catch (error) {
                console.error('Error fetching evolution chain:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchEvolutionChain();
    }, [pokemonId]);

    const fetchPokemonInfo = async (name) => {
        const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);
        const data = await res.json();
        return {
            id: data.id,
            name: data.name,
            image: data.sprites.other['official-artwork'].front_default,
        };
    };

    const parseEvolutionChain = async (chain) => {
        const pairs = [];

        let current = chain;
        while (current && current.evolves_to && current.evolves_to.length > 0) {
            const from = await fetchPokemonInfo(current.species.name);
            const to = await fetchPokemonInfo(current.evolves_to[0].species.name);
            const level = current.evolves_to[0].evolution_details?.[0]?.min_level ?? null;

            pairs.push({ from, to, level });

            current = current.evolves_to[0];
        }

        return pairs;
    };

    if (loading) return <ActivityIndicator size="large" color="gray" />;

    if (evolutionPairs.length === 0) {
        return <Text style={styles.noEvolution}>Este Pokémon no tiene evoluciones.</Text>;
    }

    return (
        <View style={styles.container}>
            {evolutionPairs.map((pair, index) => (
                <View key={index} style={styles.row}>
                    <View style={styles.pokemonBlock}>
                        <Image source={{ uri: pair.from.image }} style={styles.image} />
                        <Text style={styles.name}>{capitalize(pair.from.name)}</Text>
                        <Text style={styles.id}>#{pair.from.id.toString().padStart(3, '0')}</Text>
                    </View>

                    <View style={styles.arrowContainer}>
                        <Ionicons name="arrow-forward" size={24} color="gray" />
                        {pair.level && <Text style={styles.level}>Level {pair.level}</Text>}
                    </View>

                    <View style={styles.pokemonBlock}>
                        <Image source={{ uri: pair.to.image }} style={styles.image} />
                        <Text style={styles.name}>{capitalize(pair.to.name)}</Text>
                        <Text style={styles.id}>#{pair.to.id.toString().padStart(3, '0')}</Text>
                    </View>
                </View>
            ))}
        </View>
    );
};

const capitalize = (str) => str.charAt(0).toUpperCase() + str.slice(1);

const styles = StyleSheet.create({
    container: {
        padding: 16,
    },
    row: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 24,
    },
    pokemonBlock: {
        alignItems: 'center',
        width: 120,
    },
    image: {
        width: 80,
        height: 80,
    },
    name: {
        fontSize: 16,
        marginTop: 4,
    },
    id: {
        fontSize: 14,
        color: 'gray',
    },
    arrowContainer: {
        alignItems: 'center',
        marginHorizontal: 12,
    },
    level: {
        fontSize: 12,
        fontWeight: 'bold',
        marginTop: 2,
    },
    noEvolution: {
        marginTop: 20,
        fontStyle: 'italic',
        color: 'gray',
        textAlign: 'center',
    },
});

export default Evolution;
