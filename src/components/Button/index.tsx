import React from "react";
import { RectButtonProps } from "react-native-gesture-handler";

import { Container, Title } from "./styles";
import { useTheme } from "styled-components";
import { ActivityIndicator } from "react-native";
interface Props extends RectButtonProps {
  title: string;
  color?: string;
  enabled?: boolean;
  loading?: boolean;
}

export function Button({
  title,
  color,
  enabled = true,
  loading = false,
  ...rest
}: Props) {
  const theme = useTheme();
  const { colors } = theme;
  return (
    <Container
      enabled={enabled}
      style={{ opacity: enabled === false || loading === true ? 0.5 : 1 }}
      {...rest}
      color={color ? color : colors.main}
    >
      {loading ? (
        <ActivityIndicator color={colors.shape} />
      ) : (
        <Title>{title}</Title>
      )}
    </Container>
  );
}
