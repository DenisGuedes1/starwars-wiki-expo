import react from 'react'
import { Ionicons } from '@expo/vector-icons'
import { ButtonContainer } from './style'
import { CustomText } from '../../atoms'
import {themes} from '../../../styles/theme'

export const IconButton =({iconName, label, onPress}) =>{
    return (
        <ButtonContainer onPress={onPress}>
            <Ionicons name={iconName} size={themes.metrics.px(24)} color={themes.colors.white} />
            <CustomText fontFamily="semiBold" size={10} mt={6}>
                {label}
            </CustomText>

        </ButtonContainer>
    )
}