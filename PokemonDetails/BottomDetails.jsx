import { View, Text, Image } from 'react-native'
import React from 'react'
import { boxTypesColors } from '../assets/theme'
import styles from './styles'
import cardStyles from '../Card/styles'
import { useTypeImage } from '../utils/useTypeImage'

export default function BottomDetails({ pokemon }) {

    const { switchTypeImage } = useTypeImage()

    return (
        <View style={styles.bottomDetailsContainer}>
            <Text>Hola Test</Text>
        </View>
    )
}