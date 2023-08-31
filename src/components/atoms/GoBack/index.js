import React from 'react'
import { Ionicons } from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/native'
import { GoBackContainer } from './style'
import { themes } from '../../../styles'


export const GoBack =() =>{
    const navigation = useNavigation()
    return(
        <GoBackContainer onPress={()=> navigation.goBack()}>
            <Ionicons name="chevron-back" color={themes.colors.white} size={themes.metrics.px(28)} />
        </GoBackContainer>
    )
}