import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import styled from "styled-components/native";
import HomeScreen from "./src/screens/HomeScreen";
import WelcomeScreen from "./src/screens/WelcomeScreen";

const App = () => {
  // React useState hook: If its value changes, it triggers a re-render of the component
  const [hasPressedButton, setHasPressedButton] = useState(false);

  return (
    <Container>
      {/* Conditional rendering based on hasPressedButton value */}
      {hasPressedButton ? (
        <HomeScreen onPress={() => setHasPressedButton(false)} />
      ) : (
        <WelcomeScreen onPress={() => setHasPressedButton(true)} />
      )}
      <StatusBar style="auto" />
    </Container>
  );
};

const Container = styled.View`
  flex: 1;
  background-color: #ff0e64;
  padding: 10px;
  align-items: center;
  justify-content: space-evenly;
`;

export default App;
