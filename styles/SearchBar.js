import { StyleSheet } from 'react-native'

export default StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        //backgroundColor: 'rgba(169, 169, 169, 0.1)',
        backgroundColor: '#ECECEC',
        borderRadius: 16,
        padding: 16,
    },
    icon: {
        marginRight: 8,
    },
    textInput: {
        flex: 1,
        fontSize: 16,
        fontWeight: 'bold',
        color: 'gray',
    },
    clearIcon: {
        position: 'absolute',
        right: 15,
    },

});