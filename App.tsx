import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { Button } from 'react-native';
import styled from "styled-components/native";

const App = () => {
  // React useState hook: If its value changes, it triggers a re-render of the component
  const [hasPressedButton, setHasPressedButton] = useState(false);

  return (
    <Container>
      {/* Conditional rendering based on hasPressedButton value */}
      {hasPressedButton ? (
        <>
          <StyledText>{"You entered the App"}</StyledText>
          {/* Button component from the react-native package */}
          <Button
            title="Return"
            color="black"
            onPress={() => setHasPressedButton(false)}
          />
        </>
      ) : (
        <>
          {/* <></> is a React Fragment. It does not render any visual UI but assures that exactly one React element is returned. */}
          <StyledText size={80}>{"Leap Year"}</StyledText>
          <ButtonWide onPress={() => setHasPressedButton(true)}>
            <ButtonTextWrapper>
              <StyledText>Start</StyledText>
            </ButtonTextWrapper>
          </ButtonWide>
        </>
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

const ButtonWide = styled.TouchableOpacity`
  width: 100%;
`;

const StyledText = styled.Text<{ size?: number }>`
  font-size: ${(props) => (props.size ? `${props.size}px` : "30px")};
  font-weight: 100;
`;

const ButtonTextWrapper = styled.View`
  padding: 10px 0;
  background-color: white;
  border-radius: 35px;
  align-items: center;
`;

export default App;
