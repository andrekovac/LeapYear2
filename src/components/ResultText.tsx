import React, {
  FunctionComponent,
  useCallback,
  useEffect,
  useRef,
} from "react";
import { Animated } from "react-native";

import leapYearText, { Part } from "../util/leapYear";
import StyledText from "./StyledText";

const ResultText: FunctionComponent<{ year?: string }> = ({ year }) => {
  const springAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    letterJump();
    return () => {
      springAnim.setValue(0);
    };
  }, [year]);

  const letterJump = useCallback(() => {
    Animated.spring(springAnim, {
      toValue: 1,
      useNativeDriver: true,
    }).start();
  }, []);

  return (
    <>
      <StyledText>The year</StyledText>
      <StyledText
        style={{
          transform: [
            {
              scale: springAnim.interpolate({
                inputRange: [0, 0.5, 1],
                outputRange: [0.9, 1.1, 1],
              }),
            },
          ],
        }}
        size={90}
        testID="resultText"
      >
        {year || "0"}
      </StyledText>
      <StyledText>{year && leapYearText(year, Part.second)}</StyledText>
    </>
  );
};

export default ResultText;
