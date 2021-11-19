import React from "react";
import renderer from "react-test-renderer";

import StartButton from "../StartButton";

it(`renders correctly`, () => {
  const tree = renderer
    .create(
      <StartButton onPress={() => null}>
        Start Button Snapshot
      </StartButton>
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});
