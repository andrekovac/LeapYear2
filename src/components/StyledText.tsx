import { Animated } from "react-native";
import styled from "styled-components/native";

type StyledTextProps = {
  size?: number;
  color?: string;
};

const StyledText = styled(Animated.Text)<StyledTextProps>`
  font-size: ${props => (props.size ? props.size + "px" : "30px")};
  font-weight: 200;
  text-align: center;
  color: ${props => props.color ?? "black"};
`;

export default StyledText;
