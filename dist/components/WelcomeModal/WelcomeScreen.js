var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Paper, Typography, TextField, IconButton } from "@mui/material/";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import styled from "@emotion/styled";
var StyledWrapper = styled.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  display: flex;\n  justify-content: center;\n"], ["\n  display: flex;\n  justify-content: center;\n"])));
var StyledPaper = styled(Paper)(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  background: #e5e5e5;\n  position: absolute;\n  height: 300px;\n  padding: 25px;\n  @media (max-width: 350px) {\n    height: 500px;\n  }\n"], ["\n  background: #e5e5e5;\n  position: absolute;\n  height: 300px;\n  padding: 25px;\n  @media (max-width: 350px) {\n    height: 500px;\n  }\n"])));
var FormWrapper = styled.form(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  display: flex;\n  justify-content: center;\n  position: relative;\n  top: 10%;\n  @media (max-width: 350px) {\n    flex-direction: column;\n  }\n"], ["\n  display: flex;\n  justify-content: center;\n  position: relative;\n  top: 10%;\n  @media (max-width: 350px) {\n    flex-direction: column;\n  }\n"])));
var WelcomeModal = function (_a) {
    var setBranchName = _a.setBranchName;
    var handleSubmit = function (e) {
        e.preventDefault();
        var inputElement = e.currentTarget.elements.namedItem("restaurant-name-field");
        var inputValue = inputElement.value;
        setBranchName(inputValue);
    };
    return (_jsx(StyledWrapper, { children: _jsxs(StyledPaper, __assign({ elevation: 24 }, { children: [_jsx(Typography, __assign({ align: "center", variant: "h5" }, { children: "Welcome to Restuarant Booking System" }), void 0), _jsx(Typography, __assign({ variant: "subtitle1", marginTop: 3, marginBottom: 2, align: "center" }, { children: "Please enter a restaurant name to begin" }), void 0), _jsxs(FormWrapper, __assign({ onSubmit: handleSubmit }, { children: [_jsx(TextField, { required: true, id: "restaurant-name-field", label: "Required", defaultValue: "branch-1" }, void 0), _jsx(IconButton, __assign({ "aria-label": "CheckCircleIcon", type: "submit" }, { children: _jsx(CheckCircleIcon, { color: "secondary", fontSize: "large" }, void 0) }), void 0)] }), void 0)] }), void 0) }, void 0));
};
export default WelcomeModal;
var templateObject_1, templateObject_2, templateObject_3;
