import React, { FC } from "react";
import { ButtonTextWrapper, StyledText } from "./styles";
import styled from "styled-components/native";


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