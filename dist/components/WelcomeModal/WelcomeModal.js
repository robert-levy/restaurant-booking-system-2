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
var StyledPaper = styled(Paper)(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  background: #e5e5e5;\n  position: absolute;\n  height: 300px;\n  padding: 25px;\n"], ["\n  background: #e5e5e5;\n  position: absolute;\n  height: 300px;\n  padding: 25px;\n"])));
var FormWrapper = styled.div(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  display: flex;\n  justify-content: center;\n  position: relative;\n  top: 10%;\n"], ["\n  display: flex;\n  justify-content: center;\n  position: relative;\n  top: 10%;\n"])));
var WelcomeModal = function (_a) {
    var branchName = _a.branchName, setBranchName = _a.setBranchName;
    return (_jsxs(StyledPaper, __assign({ elevation: 24 }, { children: [_jsx(Typography, __assign({ align: "center", variant: "h5" }, { children: "Welcome to Restuarant Booking System" }), void 0), _jsx(Typography, __assign({ variant: "subtitle1", marginTop: 3, marginBottom: 2, align: "center" }, { children: "Please enter a restaurant name to begin" }), void 0), _jsxs(FormWrapper, { children: [_jsx(TextField, { required: true, id: "outlined-required", label: "Required", defaultValue: "branch-1" }, void 0), _jsx(IconButton, __assign({ "aria-label": "CheckCircleIcon" }, { children: _jsx(CheckCircleIcon, { color: "secondary", fontSize: "large" }, void 0) }), void 0)] }, void 0)] }), void 0));
};
export default WelcomeModal;
var templateObject_1, templateObject_2;
