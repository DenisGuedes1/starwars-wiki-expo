import React from 'react'
import { HeroContainer,HeroImageBackground,HeroGradient,ButtonsView } from './style'
import {CustomText,Logo} from '../../atoms'
import {colors} from '../../../styles/colors'
import { Tag,IconButton,PlayButton} from '../../molecules/index'
export const Hero = ({item, onDetail})=>{

    const{image_url, title, subtitle, type} = item
    return(
        <HeroContainer>
            <HeroImageBackground source={{
                uri: image_url
                }}
            >
            <HeroGradient colors={[colors.dark, 'transparent', colors.dark]} >
                {
                    !onDetail &&   <Logo size="small"/>
                }
              
                <Tag mt={ onDetail ? 224 : 200}>{type}</Tag>
                <CustomText fontFamily="bold" size={28} mt={8}> {title} </CustomText>
                <CustomText size={18}>{subtitle} </CustomText>
                <ButtonsView>
                    <IconButton label="Favoritos" iconName="add-circle-outline"/>
                    <PlayButton />
                    {
                        !onDetail &&(
                            <IconButton label="Saiba Mais" iconName="information-circle-outline"/>

                        )
                    }
                </ButtonsView>
            </HeroGradient>
            </HeroImageBackground>

        </HeroContainer>
    )
}