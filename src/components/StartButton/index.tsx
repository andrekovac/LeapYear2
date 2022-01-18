import React, { FC } from "react";
import styled from "styled-components/native";

import StyledText from "../StyledText";
import { ButtonTextWrapper } from "./styles";

type StartButtonProps = {
  onPress: () => void;
  children: React.ReactChild;
};
const StartButton: FC<StartButtonProps> = ({ onPress, children }) => (
  <ButtonWide onPress={onPress} testID="startButton">
    <ButtonTextWrapper>
      <StyledText>{children}</StyledText>
    </ButtonTextWrapper>
  </ButtonWide>
);

const ButtonWide = styled.TouchableWithoutFeedback`
  width: 100%;
`;

export default StartButton;
