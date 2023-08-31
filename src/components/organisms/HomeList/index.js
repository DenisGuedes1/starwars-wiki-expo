import React from 'react'
import { FlatList } from 'react-native'
import {Card } from '../../molecules'
import { CustomText } from '../../atoms'
import { ListContainer } from './styles'
import { themes } from '../../../styles'

export const HomeList =({data, title})=>{
    return(
        <ListContainer>
            <CustomText ml={24} fontFamily="black" size={18}>
                {title}
            </CustomText>
            <FlatList
                horizontal
                data={data}
                renderItem={({item}) => <Card item={item}/>}
                keyExtractor ={(item)=> String(item.id)}
                contentContainerStyle={{
                   
                        paddingLeft: themes.metrics.px(24),
                        paddingTop: themes.metrics.px(12),
                        paddingBotton: themes.metrics.px(24),
                    
                }}
            />
        
        </ListContainer>
            
    )
}