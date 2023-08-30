import React from 'react';

import AppLoading from "expo-app-loading"
import {ThemeProvider} from "styled-components"
import { useFonts,SourceSansPro_400Regular,
   SourceSansPro_700Bold,
   SourceSansPro_600SemiBold, 
   SourceSansPro_900Black } from "@expo-google-fonts/source-sans-pro"
import {themes} from "./src/styles/index"
import { Routes } from './src/routes';
export default function App() {
  let [fontsLoaded] = useFonts({
    SourceSansPro_400Regular,
    SourceSansPro_700Bold,
    SourceSansPro_600SemiBold,
    SourceSansPro_900Black
  })
  if(!fontsLoaded){
    return <AppLoading/>
  }
  return (
    <ThemeProvider theme={themes}>
      <Routes/>

    </ThemeProvider>
  );
}

