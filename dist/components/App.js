import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { useState } from "react";
import { DataProvider } from "../context/DataContext";
import Header from "./Header/Header";
import FormSection from "./FormSection/FormSection";
import RestaurantContainer from "../containers/RestaurantContainer";
import RestaurantFoyer from "./RestaurantFoyer/RestaurantFoyer";
import styled from "@emotion/styled";
import WelcomeModal from "./WelcomeScreen/WelcomeScreen";
const Wrapper = styled.div `
  background-color: #d1a7ff;
  padding: 10% 15%;
  @media (max-width: 750px) {
    padding: 0;
  }
`;
const App = () => {
    const [branchName, setBranchName] = useState("");
    return (_jsx(Wrapper, { children: _jsx(DataProvider, { children: !branchName ? (_jsx(WelcomeModal, { setBranchName: setBranchName })) : (_jsxs(_Fragment, { children: [_jsx(Header, {}), _jsxs(RestaurantContainer, { children: [_jsx(FormSection, {}), _jsx(RestaurantFoyer, { branchName: branchName })] })] })) }) }));
};
export default App;
