import React, { useEffect, useRef, useState, VFC } from "react";
import {
  Animated,
  Keyboard,
  Platform,
  TouchableWithoutFeedback,
  View,
} from "react-native";

import ReturnButton from "../../components/ReturnButton";
import { StyledText } from "../../components/StartButton/styles";
import leapYearText from "../../util/leapYear";
import {
  AnimatedWrapper,
  KeyboardContainer,
  TextInputWrapper,
  YearTextInput,
} from "./styles";

interface Props {
  onPress: () => void;
}
const HomeScreen: VFC<Props> = ({ onPress }) => {
  const [year, setYear] = useState<string>("2021");
  // Animated value of fade-in animation
  const fadeAnim = useRef(new Animated.Value(0)).current;

  const fadeIn = () => {
    fadeAnim.setValue(0);
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 600,
      useNativeDriver: true,
    }).start();
  };

  useEffect(() => {
    fadeIn();
  }, []);

  return (
    <KeyboardContainer behavior={Platform.OS === "ios" ? "padding" : "height"}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <AnimatedWrapper
          style={{
            opacity: fadeAnim,
          }}
        >
          <StyledText size={70}>Leap Year</StyledText>
          <View>
            <StyledText size={24}>{leapYearText(year)}</StyledText>
            <TextInputWrapper>
              <YearTextInput
                keyboardType={"numeric"}
                maxLength={4}
                onChangeText={setYear}
                placeholder={"2021"}
              />
            </TextInputWrapper>
          </View>
          <ReturnButton text="Return" onPress={onPress} />
        </AnimatedWrapper>
      </TouchableWithoutFeedback>
    </KeyboardContainer>
  );
};

export default HomeScreen;
