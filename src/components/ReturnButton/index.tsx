import React, { VFC } from "react";
import { Button } from 'react-native';

type ReturnButtonProps = {
  text: string;
  onPress: () => void;
}
const ReturnButton: VFC<ReturnButtonProps> = ({ text, onPress }) => (
  <Button
    title={text}
    color="black"
    onPress={onPress}
  />
);

export default ReturnButton;
