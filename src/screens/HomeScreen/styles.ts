import Constants from "expo-constants";
import { LinearGradient } from "expo-linear-gradient";
import { Animated } from "react-native";
import styled from "styled-components/native";
import Gradient from "../../components/Gradient";

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
  padding: 10px 0;
  font-size: 40px;
  text-align: center;
  font-weight: 100;
`;

export const Top = styled(LinearGradient)<{ borderRadius?: number }>`
  background-color: white;
  padding: ${Constants.statusBarHeight + 30}px 10px 30px 10px;
  /* alignment of children */
  justify-content: center;
  align-items: center;
  border-radius: ${(props) =>
    props.borderRadius ? props.borderRadius + "px" : "0px"};
`;

export const Bottom = styled(Animated.View)`
  flex: 1;
  background-color: white;
  padding: 10px;
  /* alignment of children */
  justify-content: center;
  align-items: center;
`;

export const BottomWrapper = styled.View`
  flex: 1;
  background-color: #ff0e64;
`;

export const GradientWrapper = styled(Gradient)<{ borderRadius?: number }>`
  width: 100%;
  justify-content: center;
  align-items: center;
  border-radius: ${(props) =>
    props.borderRadius ? props.borderRadius + "px" : "35px"};
`;

export const TextWrapper = styled.View`
  padding: 10px;
  background-color: white;
  width: 100%;
  border-radius: 35px;
  align-items: center;
`;