import React, { VFC } from "react";
import StartButton from "../../components/StartButton";
import { StyledText } from "../../components/StartButton/styles";

interface Props {
  onPress: () => void;
}
const WelcomeScreen: VFC<Props> = ({ onPress }) => {
  return (
    <>
      <StyledText size={80}>{"Leap Year"}</StyledText>
      <StartButton onPress={onPress}>
        {"Start"}
      </StartButton>
    </>
  );
};

export default WelcomeScreen;
