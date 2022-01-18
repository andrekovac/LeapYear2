import React, { useEffect, useRef, useState, VFC } from "react";
import {
  Animated,
  Easing,
  Keyboard,
  LayoutAnimation,
  Platform,
  TouchableWithoutFeedback,
} from "react-native";
import ResultText from "../../components/ResultText";

import ReturnButton from "../../components/ReturnButton";
import StartText from "../../components/StartText";
import StyledText from "../../components/StyledText";
import withFadeAnimation from "../../components/withFadeAnimation";
import {
  KeyboardContainer,
  Bottom,
  BottomWrapper,
  Top,
  Wrapper,
  YearTextInput,
  TextWrapper,
  GradientWrapper,
} from "./styles";

interface Props {
  onPress: () => void;
}
const HomeScreen: VFC<Props> = ({ onPress }) => {
  const [year, setYear] = useState<string>("2021");

  const elasticAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => animatePress(), []);

  const animatePress = () => {
    Animated.timing(elasticAnim, {
      toValue: 1,
      duration: 800,
      easing: Easing.bezier(0.42, 0.96, 0.53, 0.99),
      useNativeDriver: true,
    }).start();
  };

  const handleReturnButtonPress = () => {
    onPress();
    setYear("2021");
    elasticAnim.setValue(0);
  };

  const handleTextChange = (text: string) => {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
    setYear(text);
  };

  return (
    <Wrapper testID="welcome">
      <Top
        colors={["#ff0e64", "#ffcc70"]}
        start={[0.6, 0.1]}
        locations={[1, 0.1]}
      >
        {typeof year === "string" ? (
          <ResultText year={year} />
        ) : (
          <StartText animation={elasticAnim} />
        )}
      </Top>
      <KeyboardContainer
        behavior={Platform.OS === "ios" ? "padding" : "height"}
      >
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <BottomWrapper>
            <Bottom>
              <TextWrapper>
                <StyledText>Enter any year</StyledText>
              </TextWrapper>
              <GradientWrapper>
                <YearTextInput
                  keyboardType={"numeric"}
                  maxLength={4}
                  onChangeText={handleTextChange}
                  placeholder={"2021"}
                  testID="yearText"
                />
              </GradientWrapper>
              <ReturnButton
                text="Return"
                onPress={handleReturnButtonPress}
                testID="returnButton"
              />
            </Bottom>
          </BottomWrapper>
        </TouchableWithoutFeedback>
      </KeyboardContainer>
    </Wrapper>
  );
};

export default withFadeAnimation({
  shouldFadeIn: true,
  speed: 500,
})(HomeScreen);
