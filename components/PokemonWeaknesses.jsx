import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { useTypeImage } from '../utils/useTypeImage';
import cardStyles from '../Card/styles';
import { boxTypesColors } from '../assets/theme';

const PokemonWeaknesses = ({ pokemonId }) => {
    const [weaknesses, setWeaknesses] = useState([]);
    const { switchTypeImage } = useTypeImage();

    // Relación de colores para los tipos
    const typeColors = {
        fire: 'orange',
        water: 'blue',
        electric: 'yellow',
        grass: 'green',
        ice: 'lightblue',
        poison: 'purple',
        flying: 'lightgray',
        bug: 'brown',
        ghost: 'lightgreen',
        dark: 'darkgray',
        dragon: 'red',
        fairy: 'pink',
        normal: 'gray',
        steel: 'silver',
        rock: 'tan',
        fighting: 'red',
        psychic: 'violet',
        ground: 'beige',
    };

    const typeIcons = {
        fire: '🔥',
        water: '💧',
        electric: '⚡',
        grass: '🍃',
        ice: '❄️',
        poison: '☠️',
        flying: '🕊️',
        bug: '🐞',
        ghost: '👻',
        dark: '🌑',
        dragon: '🐉',
        fairy: '🧚‍♀️',
        normal: '⚪',
        steel: '🛠️',
        rock: '⛰️',
        fighting: '🥊',
        psychic: '🔮',
        ground: '🌍',
    };

    useEffect(() => {
        const fetchWeaknesses = async () => {
            try {
                const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonId}`);
                const data = await response.json();

                // Obtener los URLs de los tipos
                const typeUrls = data.types.map(type => type.type.url);

                // Obtener la información de cada tipo
                const typeData = await Promise.all(
                    typeUrls.map(url => fetch(url).then(res => res.json()))
                );

                // Extraer debilidades de la respuesta de cada tipo
                const weaknessList = [];
                typeData.forEach(type => {
                    type.damage_relations.double_damage_from.forEach(weakness => {
                        weaknessList.push(weakness.name);
                    });
                });

                setWeaknesses([...new Set(weaknessList)]); // Eliminar duplicados
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchWeaknesses();
    }, [pokemonId]);

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Weaknesses</Text>
            <ScrollView showsHorizontalScrollIndicator={false} style={styles.scrollContainer}>
                {weaknesses.map((weakness, index) => (
                    <View key={index} style={[cardStyles.pokemonType, { backgroundColor: boxTypesColors[weakness] }]}>
                        {switchTypeImage(weakness)}
                        <Text style={cardStyles.pokemonTypeText}>
                            {weakness}
                        </Text>
                    </View>
                ))}
            </ScrollView>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        padding: 10,
        marginTop: 10,
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    scrollContainer: {
        flexDirection: 'row',
    },
    typeContainer: {
        padding: 10,
        borderRadius: 50,
        marginRight: 10,
        justifyContent: 'center',
        alignItems: 'center',
    },
    typeText: {
        fontSize: 20,
        color: 'white',
        textAlign: 'center',
    },
});

export default PokemonWeaknesses;
