import renderer from "react-test-renderer";
import {
  fireEvent,
  logRoles,
  render,
  screen,
  waitFor,
} from "@testing-library/react";
import { act } from "react-dom/test-utils";
import WelcomeScreen from "../components/WelcomeScreen/WelcomeScreen";
import { DataProvider } from "../context/DataContext";
import userEvent from "@testing-library/user-event";

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

  test("should call setBranchName with custom name", () => {
    render(<WelcomeScreen setBranchName={setBranchNameMock} />, {
      wrapper: DataProvider,
    });

    const inputField: HTMLInputElement = screen.getByTestId(
      "restaurant-name-input-test"
    );
    const submitButton: HTMLButtonElement = screen.getByTestId("welcome-screen-submit");
      
    // i think the act is wrapping around the mui form control updates, since userEvent
    // is wrapper with act my default
    // eslint-disable-next-line
    act(()=> {
      userEvent.clear(inputField);
      userEvent.type(inputField, "test restaurant name");
      expect(inputField.value).toEqual("test restaurant name");

      userEvent.click(submitButton)
      expect(setBranchNameMock).toHaveBeenCalledWith("test restaurant name")
    })
  });
});