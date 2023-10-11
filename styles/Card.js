import { StyleSheet } from 'react-native'

export default StyleSheet.create({
    pokemonCard:
    {
        flexDirection: 'row',
        marginTop: 30,
        padding: 10,
        borderRadius: 10
    },
    pokemonCardLeft: {
        width: '50%',
        position: 'relative'
    },
    pokemonCardRight: {
        width: '50%',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'relative'
    },
    pokemonID: {
        fontSize: 16,
        fontWeight: 'bold'
    },
    pokemonImage: {
        marginTop: -30,
        width: 130,
        height: 130,
        marginLeft: 50
    },
    pokemonLeftImageCard: {
        position: 'absolute',
        width: 100,
        height: 40,
        left: 80,
        top: 0
    },
    pokemonRightImageCard: {
        position: 'absolute',
        width: 140,
        height: 120,
        right: -10
    },
    pokemonName: {
        fontSize: 28,
        fontWeight: 'bold',
        textTransform: 'capitalize',
        color: '#fff',
        marginTop: 10,
    },
    pokemonTypes: {
        flexDirection: 'row',
        gap: 10
    },
    pokemonType: {
        marginTop: 10,
        padding: 8,
        width: 70,
        borderRadius: 10,
        overflow: 'hidden', //Needed for borderRadius. IDK why
        textAlign: 'center',
        textTransform: 'capitalize',
    },
})