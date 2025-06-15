import { View, Text, TouchableOpacity, Image, StyleSheet, ScrollView } from "react-native";

const typeImages = {
    bug: require('../assets/Images/TypesFilterImages/Bug.png'),
    dark: require('../assets/Images/TypesFilterImages/Dark.png'),
    dragon: require('../assets/Images/TypesFilterImages/Dragon.png'),
    electric: require('../assets/Images/TypesFilterImages/Electric.png'),
    fairy: require('../assets/Images/TypesFilterImages/Fairy.png'),
    fighting: require('../assets/Images/TypesFilterImages/Fighting.png'),
    fire: require('../assets/Images/TypesFilterImages/Fire.png'),
    flying: require('../assets/Images/TypesFilterImages/Flying.png'),
    ghost: require('../assets/Images/TypesFilterImages/Ghost.png'),
    grass: require('../assets/Images/TypesFilterImages/Grass.png'),
    ground: require('../assets/Images/TypesFilterImages/Ground.png'),
    ice: require('../assets/Images/TypesFilterImages/Ice.png'),
    normal: require('../assets/Images/TypesFilterImages/Normal.png'),
    poison: require('../assets/Images/TypesFilterImages/Poison.png'),
    psychic: require('../assets/Images/TypesFilterImages/Psychic.png'),
    rock: require('../assets/Images/TypesFilterImages/Rock.png'),
    steel: require('../assets/Images/TypesFilterImages/Steel.png'),
    water: require('../assets/Images/TypesFilterImages/Water.png'),
};


export default function TypesFilterView({ selectedTypes, onToggleType, onClose }) {
    return (
        <View style={styles.modalContainer}>
            <Text style={styles.title}>Types</Text>
            <ScrollView horizontal contentContainerStyle={styles.typesContainer}>
                {Object.keys(typeImages).map((type) => (
                    <TouchableOpacity
                        key={type}
                        style={[
                            styles.circle,
                            selectedTypes.includes(type) && styles.selectedCircle
                        ]}
                        onPress={() => onToggleType(type)}
                    >
                        <Image
                            source={typeImages[type]}
                            style={styles.icon}
                            resizeMode="contain"
                        />
                    </TouchableOpacity>
                ))}
            </ScrollView>
            <View>
                <TouchableOpacity onPress={onClose} style={styles.doneButton}>
                    <Text style={styles.doneText}>Reset</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={onClose} style={styles.doneButton}>
                    <Text style={styles.doneText}>Apply</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    modalContainer: {
        backgroundColor: "white",
        marginTop: "auto",
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        padding: 20,
        alignItems: "center"
    },
    title: {
        fontSize: 18,
        fontWeight: "bold",
        marginBottom: 15
    },
    typesContainer: {
        flexDirection: "row",
        gap: 10,
        flexWrap: "wrap",
        justifyContent: "center"
    },
    circle: {
        width: 50,
        height: 50,
        borderRadius: 25,
        backgroundColor: "#eee",
        justifyContent: "center",
        alignItems: "center",
        margin: 5
    },
    selectedCircle: {
        backgroundColor: "#ccc"
    },
    icon: {
        width: 30,
        height: 30
    },
    doneButton: {
        marginTop: 20,
        backgroundColor: "#0071DC",
        paddingHorizontal: 30,
        paddingVertical: 10,
        borderRadius: 10
    },
    doneText: {
        color: "white",
        fontWeight: "bold"
    }
});
