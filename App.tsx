import { StatusBar } from "expo-status-bar";
import React from "react";
import styled from "styled-components/native";

const App = () => {
  return (
    <Container>
      <StyledText size={80}>{"Leap Year"}</StyledText>
      <ButtonWide onPress={() => console.log("Button pressed")}>
        <ButtonTextWrapper>
          <StyledText>Start</StyledText>
        </ButtonTextWrapper>
      </ButtonWide>
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
