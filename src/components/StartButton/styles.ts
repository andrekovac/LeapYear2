import styled from "styled-components/native";

export const ButtonWide = styled.TouchableOpacity`
  width: 100%;
`;

export const StyledText = styled.Text<{ size?: number }>`
  font-size: ${(props) => (props.size ? `${props.size}px` : "30px")};
  font-weight: 100;
`;

export const ButtonTextWrapper = styled.View`
  padding: 10px 0;
  background-color: white;
  border-radius: 35px;
  align-items: center;
`;
