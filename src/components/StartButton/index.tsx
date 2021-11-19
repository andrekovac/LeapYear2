import React, { FC } from "react";
import styled from "styled-components/native";

import StyledText from "../StyledText";
import { ButtonTextWrapper } from "./styles";


type StartButtonProps = {
  onPress: () => void;
}
const StartButton: FC<StartButtonProps> = ({ onPress, children }) => (
  <ButtonWide onPress={onPress}>
    <ButtonTextWrapper>
      <StyledText>{children}</StyledText>
    </ButtonTextWrapper>
  </ButtonWide>
);

const ButtonWide = styled.TouchableOpacity`
  width: 100%;
`;

export default StartButton;