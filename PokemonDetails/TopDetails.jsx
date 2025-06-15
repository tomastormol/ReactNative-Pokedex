import { View, Text, Image, TouchableOpacity } from 'react-native';
import React from 'react';
import { boxTypesColors } from '../assets/theme';
import styles from './styles';
import cardStyles from '../Card/styles';
import { useTypeImage } from '../hooks/useTypeImage';

export default function TopDetails({
    pokemon,
    setShowDamage,
    setShowStats,
    setShowEvolution,
    showDamage,
    showStats,
    showEvolution
}) {
    const { switchTypeImage } = useTypeImage();

    return (
        <View style={styles.topDetailsContainer}>
            <View style={styles.topDetailsContainerTop}>
                <Image
                    style={styles.pokemonImage}
                    source={{
                        uri: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemon.id}.png`,
                    }}
                />
                <View style={cardStyles.pokemonCardLeft}>
                    <Text style={cardStyles.pokemonID}>
                        {pokemon.id < 100 ? <Text style={cardStyles.pokemonID}>#00{pokemon.id}</Text> : <Text style={cardStyles.pokemonID}>#{pokemon.id}</Text>}
                    </Text>
                    <Text style={cardStyles.pokemonName}>
                        {pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}
                    </Text>
                    <View style={cardStyles.pokemonTypes}>
                        {pokemon?.types.map((type, index) => {
                            return (
                                <View key={index} style={[cardStyles.pokemonType, { backgroundColor: boxTypesColors[type.type.name] }]}>
                                    {switchTypeImage(type.type.name)}
                                    <Text style={cardStyles.pokemonTypeText}>
                                        {type.type.name}
                                    </Text>
                                </View>
                            );
                        })}
                    </View>
                </View>
            </View>

            <View style={styles.topDetailsContainerBotton}>
                <TouchableOpacity
                    onPress={() => {
                        setShowDamage(true);
                        setShowStats(false);
                        setShowEvolution(false);
                    }}
                >
                    <Text style={[styles.topDetailsContainerBottonText, showDamage && { fontWeight: 'bold', fontSize: 22 }]}>Damage</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => {
                        setShowDamage(false);
                        setShowStats(true);
                        setShowEvolution(false);
                    }}
                >
                    <Text style={[styles.topDetailsContainerBottonText, showStats && { fontWeight: 'bold', fontSize: 22 }]}>Stats</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => {
                        setShowDamage(false);
                        setShowStats(false);
                        setShowEvolution(true);
                    }}
                >
                    <Text style={[styles.topDetailsContainerBottonText, showEvolution && { fontWeight: 'bold', fontSize: 22 }]}>Evolution</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}
