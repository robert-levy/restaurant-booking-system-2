import React from "react";
import renderer from "react-test-renderer";
import WelcomeScreen from "../components/WelcomeScreen/WelcomeScreen";
import { DataProvider } from "../context/DataContext";

describe("WelcomeScreen.tsx", () => {
  test("snapshot test", () => {
    const component = renderer.create(
      <DataProvider>
        <WelcomeScreen setBranchName={jest.fn()} />
      </DataProvider>
    );
    expect(component).toMatchSnapshot();
  });
});
