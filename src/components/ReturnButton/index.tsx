import React, { VFC } from "react";
import { Button } from 'react-native';

type ReturnButtonProps = {
  text: string;
  onPress: () => void;
  testID: string;
}
const ReturnButton: VFC<ReturnButtonProps> = ({ text, onPress, testID }) => (
  <Button
    title={text}
    color="black"
    onPress={onPress}
    testID={testID}
  />
);

export default ReturnButton;
