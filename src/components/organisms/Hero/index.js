import React from 'react'
import { HeroContainer,HeroImageBackground,HeroGradient,ButtonsView } from './style'
import {CustomText,Logo} from '../../atoms'
import {colors} from '../../../styles/colors'
import { Tag,IconButton,PlayButton} from '../../molecules/index'
export const Hero = ()=>{

    return(
        <HeroContainer>
            <HeroImageBackground source={{
                uri: 'https://static.wikia.nocookie.net/starwars/images/7/75/EPI_TPM_poster.png/revision/latest?cb=20130822171446'
                }}
            >
            <HeroGradient colors={[colors.dark, 'transparent', colors.dark]} >
                <Logo size="small"/>
                <Tag mt={200}>Filme</Tag>
                <CustomText fontFamily="bold" size={28} mt={8}> Episódio I</CustomText>
                <CustomText size={18}> A Ameaça Fantasma</CustomText>
                <ButtonsView>
                    <IconButton label="Favoritos" iconName="add-circle-outline"/>
                    <PlayButton />
                    <IconButton label="Saiba Mais" iconName="information-circle-outline"/>
                </ButtonsView>
            </HeroGradient>
            </HeroImageBackground>

        </HeroContainer>
    )
}