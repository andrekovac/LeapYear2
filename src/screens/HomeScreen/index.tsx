import React, { useState, VFC } from "react";
import {
  Keyboard,
  Platform,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import styled from "styled-components/native";

import ReturnButton from "../../components/ReturnButton";
import { StyledText } from "../../components/StartButton/styles";
import leapYearText from "../../util/leapYear";
import {
  KeyboardContainer,
  TextInputWrapper,
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

export const Wrapper = styled.View`
  flex: 1;
  justify-content: space-around;
`;

export default HomeScreen;
