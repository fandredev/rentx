import React from "react";
import { RectButtonProps } from "react-native-gesture-handler";

import { Container, Title } from "./styles";
import { useTheme } from "styled-components";

interface Props extends RectButtonProps {
  title: string;
  color?: string;
}

export function Button({ title, color, ...rest }: Props) {
  const theme = useTheme();
  const { colors } = theme;
  return (
    <Container {...rest} color={color ? color : colors.main}>
      <Title>{title}</Title>
    </Container>
  );
}
