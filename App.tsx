import { StatusBar } from "expo-status-bar";
import { Text } from "react-native";
import React from "react";
import styled from "styled-components/native";

export default function App() {
  return (
    <Container>
      <Text>I love to eat spaghetti arrabiata</Text>
      <StatusBar style="auto" />
    </Container>
  );
}

// Styled Component
const Container = styled.View`
  flex: 1;
  background-color: #ff0e64;
  align-items: center;
  justify-content: center;
`;
