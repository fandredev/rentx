import React from 'react'
import { ActivityIndicator } from 'react-native'

import { useTheme } from 'styled-components'

export function Load (){
  const theme = useTheme()
  const { colors } = theme

  return <ActivityIndicator color={colors.main} size="large" style={{flex: 1}} />
}