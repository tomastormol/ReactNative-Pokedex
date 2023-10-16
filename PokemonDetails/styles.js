import { StyleSheet } from 'react-native'

export default StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff'
    },
    bottomDetailsContainer: {
        flex: 2,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
        width: '100%',
        borderTopLeftRadius: 45,
        borderTopRightRadius: 45
    },
    topDetailsContainer: {
        flex: 1
    },
    topDetailsContainerTop: {
        flex: 10,
        flexDirection: 'row',
        gap: 20,
        alignItems: 'center',
        width: '100%',
        paddingLeft: 40,
        paddingTop: 30
    },
    topDetailsContainerBotton: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginBottom: 5
    },
    topDetailsContainerBottonText: {
        fontSize: 16,
        color: '#FFFFFF',
        fontWeight: '400'
    },
    pokemonImage: {
        width: 130,
        height: 130,
    }
})