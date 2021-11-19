import React from "react";
import renderer from "react-test-renderer";

import StyledText from "../StyledText";

describe("StyledText", () => {
  it(`renders correctly`, () => {
    const tree = renderer.create(<StyledText />).toJSON();

    expect(tree).toMatchSnapshot();
  });

  it(`renders correctly with size prop`, () => {
    const tree = renderer.create(<StyledText size={100} />).toJSON();

    expect(tree).toMatchSnapshot();
  });

  it(`renders correctly with color prop`, () => {
    const tree = renderer.create(<StyledText color="blue" />).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
