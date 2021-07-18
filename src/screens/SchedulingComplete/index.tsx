import React from "react";
import { useWindowDimensions } from "react-native";
import LogoSvg from "../../assets/logo_background_gray.svg";
import DoneSvg from "../../assets/done.svg";

import { Container, Content, Title, Message, Footer } from "./styles";
import { ConfirmButton } from "../../components/ConfirmButton";

// useWindowDimensions se usa apenas em componentes React, pois é um hook
// Dimensions você pode usar em arquivos .ts, styled-components, StyleSheet, etc
export function SchedulingComplete() {
  const { width } = useWindowDimensions();
  return (
    <Container>
      <LogoSvg width={width} />
      <Content>
        <DoneSvg width={80} height={80} />
        <Title>Carro alugado</Title>
        <Message>
          Agora você só precisa ir {"\n"} até a concessionaria da RENTX{"\n"}
          pegar o seu automóvel.
        </Message>
      </Content>
      <Footer>
        <ConfirmButton title="Ok" />
      </Footer>
    </Container>
  );
}