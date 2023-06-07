var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { useState } from "react";
import { DataProvider } from "../context/DataContext";
import Header from "./Header/Header";
import FormSection from "./FormSection/FormSection";
import RestaurantContainer from "../containers/RestaurantContainer";
import RestaurantFoyer from "./RestaurantFoyer/RestaurantFoyer";
import styled from "@emotion/styled";
import WelcomeModal from "./WelcomeScreen/WelcomeScreen";
var Wrapper = styled.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  background-color: #d1a7ff;\n  padding: 10% 15%;\n"], ["\n  background-color: #d1a7ff;\n  padding: 10% 15%;\n"])));
var App = function () {
    var _a = useState(""), branchName = _a[0], setBranchName = _a[1];
    return (_jsx(Wrapper, { children: _jsx(DataProvider, { children: !branchName ? (_jsx(WelcomeModal, { setBranchName: setBranchName }, void 0)) : (_jsxs(_Fragment, { children: [_jsx(Header, {}, void 0), _jsxs(RestaurantContainer, { children: [_jsx(FormSection, {}, void 0), _jsx(RestaurantFoyer, { branchName: branchName }, void 0)] }, void 0)] }, void 0)) }, void 0) }, void 0));
};
export default App;
var templateObject_1;