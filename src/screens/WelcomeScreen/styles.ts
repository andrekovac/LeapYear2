import { Animated } from "react-native";
import styled from "styled-components/native";

export const AnimatedWrapper = styled(Animated.View)`
  flex: 1;
  justify-content: space-around;

  width: 100%;
`;

export const AnimatedText = styled(Animated.Text)<{ size?: number }>`
  font-size: ${(props) => (props.size ? `${props.size}px` : "30px")};
  font-weight: 100;
  text-align: center;
`;
