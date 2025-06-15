import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, ActivityIndicator } from 'react-native';
import { cardColors } from '../assets/theme'

export default function Stats({ pokemon }) {
    const [stats, setStats] = useState(null);
    const [loading, setLoading] = useState(true);

    const pokemonId = pokemon.id;

    useEffect(() => {
        const fetchStats = async () => {
            try {
                const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonId}`);
                const data = await res.json();
                setStats(data.stats);
            } catch (error) {
                console.error('Error al obtener stats:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchStats();
    }, []);

    const calculateMin = (base, statName) => {
        if (statName === 'hp') {
            return Math.floor(((2 * base) * 100) / 100 + 100 + 10); // IV=0, EV=0
        } else {
            return Math.floor(((2 * base) * 100) / 100 + 5); // Neutral nature
        }
    };

    const calculateMax = (base, statName) => {
        if (statName === 'hp') {
            return Math.floor(((2 * base + 31 + Math.floor(252 / 4)) * 100) / 100 + 100 + 10); // IV=31, EV=252
        } else {
            return Math.floor((((2 * base + 31 + Math.floor(252 / 4)) * 100) / 100 + 5) * 1.1); // Positive nature
        }
    };

    if (loading) {
        return (
            <View style={styles.loaderContainer}>
                <ActivityIndicator size="large" color="#4CAF50" />
            </View>
        );
    }

    if (!stats) {
        return (
            <View style={styles.loaderContainer}>
                <Text>Error al cargar estadísticas.</Text>
            </View>
        );
    }

    const total = stats.reduce((acc, stat) => acc + stat.base_stat, 0);

    return (

        <View style={styles.container}>
            <Text style={[styles.sectionTitle, { color: cardColors[pokemon.types[0].type.name] }]}>Base stats</Text>
            {stats.map((statObj, index) => {
                const base = statObj.base_stat;
                const statNameRaw = statObj.stat.name;

                const name = statNameRaw
                    .replace('special-attack', 'Sp. Atk')
                    .replace('special-defense', 'Sp. Def')
                    .replace('attack', 'Attack')
                    .replace('defense', 'Defense')
                    .replace('hp', 'HP')
                    .replace('speed', 'Speed');

                const min = calculateMin(base, statNameRaw);
                const max = calculateMax(base, statNameRaw);

                return (
                    <View key={index} style={styles.row}>
                        <Text style={styles.name}>{name}</Text>
                        <Text style={styles.value}>{base}</Text>
                        <Text style={styles.range}>{min} - {max}</Text>
                    </View>
                );
            })}
            <View style={styles.totalRow}>
                <Text style={styles.totalName}>Total</Text>
                <Text style={styles.totalValue}>{total}</Text>
                <View style={styles.totalLabelsContainer}>
                    <Text style={styles.totalLabel}>Min</Text>
                    <Text style={styles.totalLabel}>Max</Text>
                </View>
            </View>



            <View>
                <Text style={styles.infoText}>The ranges shown on the right are for a level 100 Pokémon. Maximum values are based on a beneficial nature, 252 EVs, 31IVs; minimum values are based on a hindering nature, 0 EVs, 0 IVS</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    sectionTitle: {
        fontSize: 16,
        fontWeight: 'bold',
        marginBottom: 16,
    },

    container: {
        paddingVertical: 8,
        paddingHorizontal: 18,

    },
    loaderContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    row: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 10,
    },
    name: {
        width: 80,
        fontWeight: 'bold',
    },
    value: {
        width: 35,
        textAlign: 'center',
    },
    range: {
        flex: 1,
        textAlign: 'right',
        fontSize: 12,
        color: '#666',
    },
    totalRow: {
        flexDirection: 'row',
        alignItems: 'center',
        width: '100%',
    },
    totalName: {
        width: 80,
        fontWeight: 'bold',
    },
    totalValue: {
        width: 35,
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: 16,
    },
    infoText: {
        fontSize: 12,
        color: '#666',
        marginTop: 16,
    },
    totalLabelsContainer: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'flex-end',
        paddingLeft: 16,
    },

    totalLabel: {
        fontSize: 12,
        color: '#999',
        textAlign: 'right',
        width: 35,
    },

});
