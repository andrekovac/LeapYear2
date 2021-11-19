import React from "react";
import renderer from "react-test-renderer";
import { render } from "@testing-library/react-native";

import StartButton from "../StartButton";

describe("StyledText", () => {
  it(`renders correctly`, () => {
    const tree = renderer
      .create(
        <StartButton onPress={() => null}>Start Button Snapshot</StartButton>
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });

  it("renders the correct button title", () => {
    const { queryByText } = render(
      <StartButton onPress={() => null}>My Button</StartButton>
    );
    expect(queryByText("My Button")).not.toBeNull();
  });
});
