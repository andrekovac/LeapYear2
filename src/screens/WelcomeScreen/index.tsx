import React, { useEffect, useRef, VFC } from "react";
import { Animated, Easing } from "react-native";
import styled from "styled-components/native";

import StartButton from "../../components/StartButton";

interface Props {
  onPress: () => void;
  hasPressedButton: boolean;
}
const WelcomeScreen: VFC<Props> = ({ onPress, hasPressedButton }) => {
  const introAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    bounceIn();
    return () => {
      introAnim.setValue(0);
    };
  }, [hasPressedButton]);

  const bounceIn = () => {
    Animated.timing(introAnim, {
      toValue: 1,
      duration: 1000,
      easing: Easing.bounce,
      useNativeDriver: true,
    }).start();
  };

  return (
    <>
      <AnimatedText
        style={{
          transform: [
            {
              scale: introAnim.interpolate({
                // Animated.Value goes from 0 to 1
                inputRange: [0, 1],
                // scale value changes from 1 to 2
                outputRange: [1, 2],
              }),
            },
          ],
        }}
      >
        LeapYear
      </AnimatedText>
      <StartButton onPress={onPress}>{"Start"}</StartButton>
    </>
  );
};

const AnimatedText = styled(Animated.Text)<{ size?: number }>`
  font-size: ${(props) => (props.size ? `${props.size}px` : "30px")};
  font-weight: 100;
  text-align: center;
`;

export default WelcomeScreen;
