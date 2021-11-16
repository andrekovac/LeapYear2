import React, { VFC } from "react";
import ReturnButton from "../../components/ReturnButton";
import { StyledText } from "../../components/StartButton/styles";

interface Props {
  onPress: () => void;
}
const HomeScreen: VFC<Props> = ({ onPress }) => (
  <>
    <StyledText>{"You entered the App"}</StyledText>
    <ReturnButton text="Return" onPress={onPress} />
  </>
);

export default HomeScreen;

