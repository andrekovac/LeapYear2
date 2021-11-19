import React, { useEffect, useRef, VFC } from "react";
import { Animated, Easing } from "react-native";

import StartButton from "../../components/StartButton";
import { AnimatedText, AnimatedWrapper } from "./styles";
import useFadeOutAnimation from "../../hooks/useFadeOutAnimation";

interface Props {
  onPress: () => void;
  hasPressedButton: boolean;
}
const WelcomeScreen: VFC<Props> = ({ onPress, hasPressedButton }) => {
  const introAnim = useRef(new Animated.Value(0)).current;

  const [opacityStyle, startFadeOutAnimation] = useFadeOutAnimation({
    onUnmountCallback: onPress,
  });

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
    <AnimatedWrapper
      style={opacityStyle}
    >
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
      <StartButton onPress={startFadeOutAnimation}>{"Start"}</StartButton>
    </AnimatedWrapper>
  );
};

export default WelcomeScreen;
