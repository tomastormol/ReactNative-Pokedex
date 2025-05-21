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
        position: 'relative'
    },
    pokemonImageCurve: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        height: 6, // un poco más alto para que la sombra se note
        backgroundColor: '#fff',
        borderTopLeftRadius: 50,
        borderTopRightRadius: 50,
        zIndex: -1,

        // Sombra para iOS
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,

        // Sombra para Android
        elevation: 3,
    },


})