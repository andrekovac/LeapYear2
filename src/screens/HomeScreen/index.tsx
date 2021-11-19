import React, { useState, VFC } from "react";
import {
  Keyboard,
  Platform,
  TouchableWithoutFeedback,
  View,
} from "react-native";

import ReturnButton from "../../components/ReturnButton";
import { StyledText } from "../../components/StartButton/styles";
import withFadeAnimation from "../../components/withFadeAnimation";
import leapYearText from "../../util/leapYear";
import {
  KeyboardContainer,
  TextInputWrapper,
  Wrapper,
  YearTextInput,
} from "./styles";

interface Props {
  onPress: () => void;
}
const HomeScreen: VFC<Props> = ({ onPress }) => {
  const [year, setYear] = useState<string>("2021");

  return (
    <KeyboardContainer behavior={Platform.OS === "ios" ? "padding" : "height"}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <Wrapper>
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
          </Wrapper>
      </TouchableWithoutFeedback>
    </KeyboardContainer>
  );
};

export default withFadeAnimation({
  shouldFadeIn: true,
  speed: 500,
})(HomeScreen);
