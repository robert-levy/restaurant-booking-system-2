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
import { useState } from "react";
import { Paper, Typography, Divider, TextField, MenuItem, IconButton, } from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import styled from "@emotion/styled";
import { useDataDispatch } from "../../context/DataContext";
import { makeBooking } from "../../context/dataActions";
var StyledPaper = styled(Paper)(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  height: 25vh;\n  background: #eee;\n  padding: 5% 5%;\n  gap: 5%;\n"], ["\n  height: 25vh;\n  background: #eee;\n  padding: 5% 5%;\n  gap: 5%;\n"])));
var FormWrapper = styled.div(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  display: flex;\n"], ["\n  display: flex;\n"])));
var FormSection = function () {
    var dispatch = useDataDispatch().dispatch;
    var _a = useState(2), totalPersons = _a[0], setTotalPersons = _a[1];
    var _b = useState(0), personsWithDisability = _b[0], setPersonsWithDisability = _b[1];
    var handleSubmit = function () {
        dispatch(makeBooking(totalPersons, personsWithDisability));
    };
    return (_jsxs(StyledPaper, __assign({ elevation: 1 }, { children: [_jsx(Typography, __assign({ variant: "h5" }, { children: "New Booking" }), void 0), _jsx(Divider, { style: { margin: "2% 5%" } }, void 0), _jsxs(FormWrapper /*onSubmit={handleSubmit}*/, { children: [_jsx(TextField, __assign({ id: "", select: true, required: true, label: "Total Persons", fullWidth: true, color: "secondary", value: totalPersons, onChange: function (e) { return setTotalPersons(Number(e.target.value)); } }, { children: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(function (option, index) { return (_jsx(MenuItem, __assign({ value: option }, { children: option }), index)); }) }), void 0), _jsx(TextField, __assign({ id: "", select: true, label: "Persons with a Disability", fullWidth: true, defaultValue: 0, color: "secondary", value: personsWithDisability, onChange: function (e) { return setPersonsWithDisability(Number(e.target.value)); } }, { children: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(function (option, index) { return (_jsx(MenuItem, __assign({ value: option }, { children: option }), index)); }) }), void 0), _jsx(IconButton, __assign({ "aria-label": "CheckCircleIcon", onClick: handleSubmit }, { children: _jsx(CheckCircleIcon, { color: "secondary", fontSize: "large" }, void 0) }), void 0)] }, void 0)] }), void 0));
};
export default FormSection;
var templateObject_1, templateObject_2;
