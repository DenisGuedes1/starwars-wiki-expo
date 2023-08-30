import styled from'styled-components/native'

export const Text = styled.Text`
    font-size: ${({theme})=> theme.metrics.px(24)}px;
    color: ${({color,theme}) => color || theme.colors.ligth };
    font-family: 'SourceSansPro_700Bold';
    margin-top:${({theme})=> theme.metrics.px(12)}px;

`