import React from "react";
import { StatusBar } from "react-native";
import Logo from "../../assets/logo.svg";

import { RFValue } from "react-native-responsive-fontsize";

import { Container, Header, HeaderContent, TotalCars } from "./styles";
import { Car } from "../../components/Car";

export function Home(): JSX.Element {
  const carData = {
    brand: "Audi",
    name: "RS 5 Coupé",
    rent: {
      period: "AO DIA",
      price: 120,
    },
    thumbnail:
      "https://www.motortrend.com/uploads/sites/10/2018/05/2018-audi-rs5-4wd-coupe-angular-front.png",
  };
  const carData2 = {
    brand: "Panamera",
    name: "RS 5 Coupé",
    rent: {
      period: "AO DIA",
      price: 200,
    },
    thumbnail:
      "https://img2.gratispng.com/20180517/zzw/kisspng-2018-porsche-panamera-2015-porsche-panamera-porsch-5afe197550f488.4299338415266021013316.jpg",
  };
  return (
    <Container>
      <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      />
      <Header>
        <HeaderContent>
          <Logo width={RFValue(108)} height={RFValue(12)} />
          <TotalCars>Total de 12 carros</TotalCars>
        </HeaderContent>
      </Header>

      <Car data={carData} />
      <Car data={carData2} />
    </Container>
  );
}
