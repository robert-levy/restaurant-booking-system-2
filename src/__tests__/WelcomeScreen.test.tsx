import renderer from "react-test-renderer";
import { render } from "@testing-library/react";
import WelcomeScreen from "../components/WelcomeScreen/WelcomeScreen";
import { DataProvider } from "../context/DataContext";

describe("WelcomeScreen.tsx", () => {
  const setBranchNameMock = jest.fn();
  render(
    <DataProvider>
      <WelcomeScreen setBranchName={setBranchNameMock} />
    </DataProvider>
  );

  test("snapshot test", () => {
    const component = renderer.create(
      <DataProvider>
        <WelcomeScreen setBranchName={setBranchNameMock} />
      </DataProvider>
    );
    expect(component).toMatchSnapshot();
  });
});
