import { StatusBar } from "expo-status-bar";
import React, { VFC, FC, useState } from "react";
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
          <ReturnButton text="Return" onPress={() => setHasPressedButton(false)} />
        </>
      ) : (
        <>
          <StyledText size={80}>{"Leap Year"}</StyledText>
          <StartButton  onPress={() => setHasPressedButton(true)}>{"Start"}</StartButton>
        </>
      )}
      <StatusBar style="auto" />
    </Container>
  );
};

type ReturnButtonProps = {
  text: string;
  onPress: () => void;
}
const ReturnButton: VFC<ReturnButtonProps> = ({ text, onPress }) => (
  <Button
    title={text}
    color="black"
    onPress={onPress}
  />
);

type StartButtonProps = {
  onPress: () => void;
}
const StartButton: FC<StartButtonProps> = ({ onPress, children }) => (
  <ButtonWide onPress={onPress}>
    <ButtonTextWrapper>
      <StyledText>{children}</StyledText>
    </ButtonTextWrapper>
  </ButtonWide>
)

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
