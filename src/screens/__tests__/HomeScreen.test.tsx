import React from "react";
import { fireEvent, render } from "@testing-library/react-native";

import HomeScreen from "../HomeScreen";

describe("HomeScreen", () => {
  it("displays correct text on top (leap year)", () => {
    const { getByTestId, queryByText } = render(
      <HomeScreen onPress={() => null} />
    );

    fireEvent.changeText(getByTestId("yearText"), "2020");
    expect(queryByText("is a leap year 🎉!")).not.toBeNull();
    expect(queryByText("is no leap year 😕.")).toBeNull();
  });

  it("displays correct text on top (no leap year)", () => {
    const { getByTestId, queryByText } = render(
      <HomeScreen onPress={() => null} />
    );

    fireEvent.changeText(getByTestId("yearText"), "2019");
    expect(queryByText("is a leap year 🎉!")).toBeNull();
    expect(queryByText("is no leap year 😕.")).not.toBeNull();
  });

  it('calls the onPress handler', () => {
    const pressHandler = jest.fn();
    const {getByTestId} = render(<HomeScreen onPress={pressHandler} />);
  
    fireEvent.press(getByTestId('returnButton'));
  
    expect(pressHandler).toHaveBeenCalled();
  });
});
