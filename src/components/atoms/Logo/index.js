import React from 'react'
import { LogoImage } from './styles'
import LogoEmpire from '../../../../assets/LogoEmpire.png'

const sizes = {
  small:28,
  large: 64,
}
export const Logo = ({size}) => {
  return <LogoImage source={LogoEmpire} size={sizes[size || 'large']} />
}
