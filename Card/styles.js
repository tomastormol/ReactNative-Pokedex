import { StyleSheet } from 'react-native'

export default StyleSheet.create({
    pokemonCard: {
        flexDirection: 'row',
        marginTop: 30,
        padding: 10,
        borderRadius: 10
    },
    pokemonCardLeft: {
        width: '50%',
        position: 'relative',
        marginLeft: 5
    },
    pokemonCardRight: {
        width: '50%',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'relative'
    },
    pokemonID: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#17171B99'
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
        width: 150,
        height: 130,
        right: -10
    },
    pokemonName: {
        fontSize: 26,
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
        flexDirection: 'row',
        gap: 3,
        marginTop: 10,
        padding: 6,
        borderRadius: 7,
        overflow: 'hidden', //Needed for borderRadius. IDK why
    },
    pokemonTypeText: {
        textTransform: 'capitalize',
        color: '#fff',
        fontSize: 18,
        fontWeight: '500',
        alignSelf: 'center'
    }
})