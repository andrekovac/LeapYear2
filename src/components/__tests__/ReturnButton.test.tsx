import React from "react";
import renderer from "react-test-renderer";

import ReturnButton from "../ReturnButton";

it(`renders correctly`, () => {
  const tree = renderer
    .create(
      <ReturnButton text={"ReturnButton Snapshot Test"} onPress={() => null} />
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});
