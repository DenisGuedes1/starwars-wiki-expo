import React, {useEffect} from 'react'
import { StatusBar } from 'expo-status-bar'
import { Container, CustomText, Logo } from '../../components'
export const SplashScreen = ({navigation}) => {
  useEffect(()=>{
    setTimeout(()=>{
      navigation.navigate('Home')
    },1000)
  },[navigation])
  return (
    <Container align="center" justify="center">
      <Logo />
      <CustomText>StarWars - Wiki</CustomText>
      <StatusBar style="auto" />
    </Container>
  )
}


