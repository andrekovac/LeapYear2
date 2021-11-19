import styled from "styled-components/native";

export const ButtonWide = styled.TouchableOpacity`
  width: 100%;
`;

type StyledTextProps = {
  size?: number;
  color?: string;
};

export const StyledText = styled.Text<StyledTextProps>`
  font-size: ${props => (props.size ? props.size + "px" : "30px")};
  font-weight: 200;
  text-align: center;
  color: ${props => props.color ?? "black"};
`;

export const ButtonTextWrapper = styled.View`
  padding: 10px 0;
  background-color: white;
  border-radius: 35px;
  align-items: center;
`;
