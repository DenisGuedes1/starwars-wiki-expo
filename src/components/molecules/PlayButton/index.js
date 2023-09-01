import React from 'react'
import { ButtonContainer } from './styles'
import { CustomText } from '../../atoms'
import { Ionicons } from '@expo/vector-icons'
import { themes } from '../../../styles'

export const PlayButton = ({onPress}) =>{
    return (
        <ButtonContainer onPress={onPress}>
            <Ionicons name="play" size={themes.metrics.px(12)} color={themes.colors.black} />
            <CustomText color="black" fontFamily="bold" size={14}>Play</CustomText>
        </ButtonContainer>
    )
}