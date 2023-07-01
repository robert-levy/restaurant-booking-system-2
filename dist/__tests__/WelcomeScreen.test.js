import { jsx as _jsx } from "react/jsx-runtime";
import renderer from "react-test-renderer";
import WelcomeScreen from "../components/WelcomeScreen/WelcomeScreen";
import { DataProvider } from "../context/DataContext";
describe("WelcomeScreen.tsx", () => {
    test("snapshot test", () => {
        const component = renderer.create(_jsx(DataProvider, { children: _jsx(WelcomeScreen, { setBranchName: jest.fn() }) }));
        expect(component).toMatchSnapshot();
    });
});
