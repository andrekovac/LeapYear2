import { Animated } from "react-native";
import styled from "styled-components/native";

export const KeyboardContainer = styled.KeyboardAvoidingView`
  flex: 1;
`;

export const Wrapper = styled.View`
  flex: 1;
  justify-content: space-around;
`;

export const TextInputWrapper = styled.View`
  min-width: 100%;
`;

export const YearTextInput = styled.TextInput`
  height: 60px;
  margin: 12px;
  padding: 12px;

  border: 3px solid black;
  border-radius: 5px;

  font-size: 20px;
`;
