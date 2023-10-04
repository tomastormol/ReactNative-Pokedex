import { StyleSheet } from 'react-native'

export default StyleSheet.create({
    pokemonCard:
    {
        flexDirection: 'row',
        backgroundColor: "lightgrey",
        marginTop: 30,
        padding: 10,
        borderRadius: 10
    },
    pokemonCardLeft: {
        width: '50%'
    },
    pokemonCardRight: {
        width: '50%',
        justifyContent: 'center',
        alignItems: 'center'
    },
    pokemonID: {
        fontSize: 16,
        fontWeight: 'bold'
    },
    pokemonName: {
        fontSize: 25,
        fontWeight: 'bold',
        textTransform: 'capitalize',
        color: '#17171b99',
        marginTop: 10,
    },
    pokemonTypes: {
        flexDirection: 'row',
        gap: 10
    },
    pokemonType: {
        marginTop: 10,
        backgroundColor: 'red',
        padding: 8,
        width: 70,
        borderRadius: 10,
        overflow: 'hidden', //Needed for borderRadius. IDK why
        textAlign: 'center',
        textTransform: 'capitalize',
    },
    pokemonImage: {
        marginTop: -30,
        width: 130,
        height: 130,
    },
})